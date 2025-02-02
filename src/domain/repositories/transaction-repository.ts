import {
  TransactionRequest,
  TransactionResponse,
} from "../entities/transaction";
import { TransactionStatus } from "../entities/common";

export interface TransactionRepository {
  create(transaction: TransactionRequest): Promise<TransactionResponse>;
  findById(id: string): Promise<TransactionResponse>;
  findAll(): Promise<TransactionResponse[]>;
  updateStatus(
    id: string,
    status: TransactionStatus
  ): Promise<TransactionResponse>;
}
