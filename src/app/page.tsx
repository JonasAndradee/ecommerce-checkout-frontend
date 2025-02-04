import { TransactionList } from "@/presentation/components/transactions/transaction-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de transações | E-commerce",
  description: "Veja todas as transações realizadas",
};

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Transações</h1>
      <TransactionList />
    </div>
  );
}
