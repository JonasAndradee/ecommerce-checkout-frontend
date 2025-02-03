import { PaymentType } from "./common";

export interface CardPaymentRequest {
  number: string;
  holderName: string;
  cvv: string;
  expirationDate: string;
  installments: number;
}

export interface CardPaymentResponse {
  firstDigits: string;
  lastDigits: string;
  holderName: string;
  expirationDate: string;
  installments: number;
}

export interface PaymentMethodRequest {
  type: PaymentType;
  card: CardPaymentRequest;
}

export interface PaymentMethodResponse {
  type: PaymentType;
  card: CardPaymentResponse;
}
