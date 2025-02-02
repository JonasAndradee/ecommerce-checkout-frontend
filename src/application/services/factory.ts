import { TransactionService } from "./transaction-service";
import { HttpTransactionRepository } from "@/infrastructure/http/repositories/transaction-repository";

export class ServiceFactory {
  static createTransactionService(): TransactionService {
    const repository = new HttpTransactionRepository();
    return new TransactionService(repository);
  }
}
