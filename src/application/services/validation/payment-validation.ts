import { CardPaymentRequest } from "@/domain/entities/payment";

export class PaymentValidation {
  static validateCard(card: CardPaymentRequest): boolean {
    return (
      this.validateCardNumber(card.number) &&
      this.validateExpirationDate(card.expirationDate) &&
      this.validateCVV(card.cvv)
    );
  }

  static validateCardNumber(number: string): boolean {
    const digits = number.replace(/\D/g, "");
    if (digits.length !== 16) return false;

    return this.luhnCheck(digits);
  }

  static validateExpirationDate(date: string): boolean {
    const [month, year] = date.split("/");
    const expiry = new Date(parseInt(`20${year}`), parseInt(month) - 1);
    return expiry > new Date();
  }

  static validateCVV(cvv: string): boolean {
    return /^\d{3,4}$/.test(cvv);
  }

  private static luhnCheck(digits: string): boolean {
    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i]);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  }
}
