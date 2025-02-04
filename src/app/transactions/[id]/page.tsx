import { TransactionDetails } from "@/presentation/components/transactions/transaction-details";

interface TransactionDetailsPageProps {
  params: { id: string };
}

export default async function TransactionDetailsPage({
  params,
}: TransactionDetailsPageProps) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Detalhes da Transação</h1>
      <TransactionDetails id={id} />
    </>
  );
}
