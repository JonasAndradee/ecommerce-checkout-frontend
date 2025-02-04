import { TransactionDetails } from "@/presentation/components/transactions/transaction-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalhes da transação | E-commerce",
  description: "Informação detalhada sobre a transação",
};

export default async function TransactionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <TransactionDetails id={id} />;
}
