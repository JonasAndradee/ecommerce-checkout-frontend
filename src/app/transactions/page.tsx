import { TransactionList } from "@/presentation/components/transactions/transaction-list";

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Transações</h1>
      <TransactionList />
    </div>
  );
}
