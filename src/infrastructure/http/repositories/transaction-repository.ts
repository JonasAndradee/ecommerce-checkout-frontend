import { TransactionRepository } from "@/domain/repositories/transaction-repository";
import {
  TransactionRequest,
  TransactionResponse,
} from "@/domain/entities/transaction";

export class HttpTransactionRepository implements TransactionRepository {
  private readonly baseUrl = "/api/transactions";

  async create(transaction: TransactionRequest): Promise<TransactionResponse> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      body: JSON.stringify(transaction),
    });

    if (!response.ok) {
      throw new Error("Failed to create transaction");
    }

    return response.json();
  }

  async findById(id: string): Promise<TransactionResponse> {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (!response.ok) {
      throw new Error("Transaction not found");
    }

    return response.json();
  }

  async findAll(): Promise<TransactionResponse[]> {
    const response = await fetch(this.baseUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }

    return response.json();
  }
}
