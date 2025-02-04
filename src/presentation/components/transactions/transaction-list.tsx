"use client";

import { useState } from "react";
import { useTransactions } from "@/presentation/hooks/use-transaction";
import { TransactionStatus } from "@/domain/entities/common";
import { Badge } from "@/presentation/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/presentation/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";
import { Button } from "@/presentation/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { utilsFormat } from "@/presentation/lib/utils/format";

const ITEMS_PER_PAGE = 10;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
      <div className="text-sm text-muted-foreground order-2 sm:order-1">
        Mostrando {startIndex + 1}-
        {Math.min(startIndex + ITEMS_PER_PAGE, totalItems)} de {totalItems}{" "}
        transações
      </div>
      <div className="flex items-center gap-2 order-1 sm:order-2">
        <div className="hidden sm:flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            className="hidden sm:inline-flex"
            aria-label="Ir para a primeira página"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Ir para a página anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-sm flex items-center gap-1">
          <span className="text-muted-foreground">Página</span>
          <span className="font-medium">{currentPage}</span>
          <span className="text-muted-foreground">de</span>
          <span className="font-medium">{totalPages}</span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Ir para a próxima página"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="hidden sm:flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="hidden sm:inline-flex"
            aria-label="Ir para a última página"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

const statusMap: Record<
  TransactionStatus,
  { label: string; variant: "default" | "destructive", className?: string }
> = {
  authorized: { label: "Autorizado", variant: "default" },
  failed: { label: "Falhou", variant: "destructive", className: "bg-red-900" },
};

export function TransactionList() {
  const { data: transactions, isLoading, error } = useTransactions();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return <TransactionListSkeleton />;
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-destructive">
            Falha ao carregar transações
          </div>
        </CardContent>
      </Card>
    );
  }

  const totalItems = transactions?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTransactions = transactions?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de transações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Método de Pagamento</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedTransactions?.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.id}
                  </TableCell>
                  <TableCell>
                    {transaction.customer.firstName}{" "}
                    {transaction.customer.lastName}
                  </TableCell>
                  <TableCell>
                    {utilsFormat.currency(transaction.amount)}
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusMap[transaction.status].variant} className={statusMap[transaction.status].className}>
                      {statusMap[transaction.status].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    •••• {transaction.paymentMethod.card.lastDigits}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={`/transactions/${transaction.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          startIndex={startIndex}
          onPageChange={setCurrentPage}
        />
      </CardContent>
    </Card>
  );
}

function TransactionListSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de transações</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="h-6 w-1/12 bg-muted animate-pulse rounded" />
              <div className="h-6 w-2/12 bg-muted animate-pulse rounded" />
              <div className="h-6 w-2/12 bg-muted animate-pulse rounded" />
              <div className="h-6 w-2/12 bg-muted animate-pulse rounded" />
              <div className="h-6 w-2/12 bg-muted animate-pulse rounded" />
              <div className="h-6 w-1/12 bg-muted animate-pulse rounded ml-auto" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
