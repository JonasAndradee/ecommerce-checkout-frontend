"use client";

import { useTransaction } from "@/presentation/hooks/use-transaction";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/presentation/components/ui/card";
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
  CreditCard,
  Calendar,
  Users,
  MapPin,
  ShoppingCart,
  CheckCircle2,
  XCircle,
  Receipt,
} from "lucide-react";
import { Separator } from "@/presentation/components/ui/separator";
import { utilsFormat } from "@/presentation/lib/utils/format";

interface TransactionDetailsProps {
  id: string;
}

export function TransactionDetails({ id }: TransactionDetailsProps) {
  const { data: transaction, isLoading, error } = useTransaction(id);

  if (isLoading) {
    return <TransactionDetailsSkeleton />;
  }

  if (error || !transaction) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <XCircle className="h-8 w-8 text-destructive" />
            <div className="text-xl font-semibold text-destructive">
              Transação não encontrada
            </div>
            <p className="text-sm text-muted-foreground">
              Verifique o ID da transação e tente novamente
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formattedAmount = utilsFormat.currency(transaction.amount);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Receipt className="h-5 w-5" />
              <CardTitle>Detalhes da Transação</CardTitle>
            </div>
            <CardDescription>ID: {id}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {transaction.status === "authorized" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                  <span className="font-medium">Status</span>
                </div>
                <Badge
                  variant={
                    transaction.status === "authorized"
                      ? "default"
                      : "destructive"
                  }
                  className="text-sm"
                >
                  {transaction.status === "authorized"
                    ? "Autorizado"
                    : "Falhou"}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="font-medium">Valor Total</span>
                <span className="text-lg font-bold">{formattedAmount}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <CardTitle>Informações do Cliente</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Nome
                  </h3>
                  <p className="mt-1 font-medium">
                    {transaction.customer.firstName}{" "}
                    {transaction.customer.lastName}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Documento
                  </h3>
                  <p className="mt-1 font-medium">
                    {transaction.customer.document.type.toUpperCase()}:{" "}
                    {transaction.customer.document.number}
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Endereço
                  </h3>
                </div>
                <p className="text-sm leading-relaxed">
                  {transaction.customer.address.street},{" "}
                  {transaction.customer.address.number}
                  <br />
                  {transaction.customer.address.neighborhood},{" "}
                  {transaction.customer.address.city}
                  <br />
                  {transaction.customer.address.state},{" "}
                  {transaction.customer.address.country}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <CardTitle>Itens do Pedido</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead className="text-right">Quantidade</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transaction.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {utilsFormat.currency(item.amount)}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {utilsFormat.currency(item.amount * item.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} className="text-right font-medium">
                    Total
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    {formattedAmount}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            <CardTitle>Informações de Pagamento</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Número do Cartão
                </h3>
                <p className="mt-1 font-medium">
                  {transaction.paymentMethod.card.firstDigits} •••• ••••{" "}
                  {transaction.paymentMethod.card.lastDigits}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Titular do Cartão
                </h3>
                <p className="mt-1 font-medium">
                  {transaction.paymentMethod.card.holderName}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Data de Validade
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">
                    {transaction.paymentMethod.card.expirationDate}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">
                  Parcelas
                </h3>
                <p className="mt-1 font-medium">
                  {transaction.paymentMethod.card.installments}x de{" "}
                  {utilsFormat.currency(
                    transaction.amount /
                      transaction.paymentMethod.card.installments
                  )}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TransactionDetailsSkeleton() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="h-6 w-1/4 bg-muted animate-pulse rounded" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
              <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
