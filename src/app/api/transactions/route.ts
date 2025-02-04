import { NextResponse } from "next/server";
import {
  TransactionRequest,
  TransactionResponse,
} from "@/domain/entities/transaction";
import { transactions } from "../_data/transactions";
import { delayPromise } from "../_utils/delay";

export async function GET() {
  await delayPromise(2000);
  return NextResponse.json(transactions);
}

export async function POST(request: Request) {
  const body: TransactionRequest = await request.json();

  const newTransaction: TransactionResponse = {
    id: "eace0041-723c-44b2-887d-631878171bbf",
    status: Math.random() > 0.1 ? "authorized" : "failed",
    amount: body.amount,
    customer: body.customer,
    items: body.items,
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: body.paymentMethod.card.number.slice(0, 4),
        lastDigits: body.paymentMethod.card.number.slice(-4),
        holderName: body.paymentMethod.card.holderName,
        expirationDate: body.paymentMethod.card.expirationDate,
        installments: body.paymentMethod.card.installments,
      },
    },
  };

  await delayPromise(2000);
  return NextResponse.json(newTransaction);
}
