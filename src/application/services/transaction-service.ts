import { TransactionRepository } from "@/domain/repositories/transaction-repository";
import {
  TransactionRequest,
  TransactionResponse,
} from "@/domain/entities/transaction";
import { PaymentValidation } from "./validation/payment-validation";

export class TransactionService {
  constructor(private readonly repository: TransactionRepository) {}

  async createTransaction(
    transaction: TransactionRequest
  ): Promise<TransactionResponse> {
    const isValidCard = PaymentValidation.validateCard(
      transaction.paymentMethod.card
    );

    if (!isValidCard) {
      throw new Error("Invalid card information");
    }

    const totalAmount = transaction.items.reduce(
      (sum, item) => sum + item.amount * item.quantity,
      0
    );

    if (totalAmount !== transaction.amount) {
      throw new Error("Invalid transaction amount");
    }

    return this.repository.create(transaction);
  }

  async getTransaction(id: string): Promise<TransactionResponse> {
    return this.repository.findById(id);
  }

  async getAllTransactions(): Promise<TransactionResponse[]> {
    return this.repository.findAll();
  }
}
