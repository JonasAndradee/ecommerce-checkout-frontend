"use client";

import { useCart } from "@/presentation/contexts/cart-context";
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
import { utilsFormat } from "@/presentation/lib/utils/format";

export function CartSummary() {
  const { items, total } = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resumo da Compra</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.quantity}</TableCell>
                <TableCell className="text-right">
                  {utilsFormat.currency(item.amount)}
                </TableCell>
                <TableCell className="text-right">
                  {utilsFormat.currency(item.amount * item.quantity)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-right font-bold">
                Total:
              </TableCell>
              <TableCell className="text-right font-bold">
                {utilsFormat.currency(total)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="mt-4 text-sm text-muted-foreground">
          <p>Informações importantes:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Frete incluso para todo o Brasil</li>
            <li>Garantia de 12 meses do fabricante</li>
            <li>Prazo de entrega: 2 a 5 dias úteis</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
