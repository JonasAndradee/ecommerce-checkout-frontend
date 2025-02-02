import { useMutation, useQuery } from "@tanstack/react-query";
import { ServiceFactory } from "@/application/services/factory";
import { TransactionRequest } from "@/domain/entities/transaction";

const transactionService = ServiceFactory.createTransactionService();

export function useCreateTransaction() {
  return useMutation({
    mutationFn: (data: TransactionRequest) =>
      transactionService.createTransaction(data),
  });
}

export function useTransaction(id: string) {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: () => transactionService.getTransaction(id),
  });
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactionService.getAllTransactions(),
  });
}
