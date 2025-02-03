import {
  TransactionRequest,
  TransactionResponse,
} from "../entities/transaction";

export interface TransactionRepository {
  create(transaction: TransactionRequest): Promise<TransactionResponse>;
  findById(id: string): Promise<TransactionResponse>;
  findAll(): Promise<TransactionResponse[]>;
}
