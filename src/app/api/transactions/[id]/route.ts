import { NextResponse } from "next/server";
import { transactions } from "../../_data/transactions";
import { delayPromise } from "../../_utils/delay";

export async function GET(request: Request) {
  const id = request.url.split("/").pop();
  await delayPromise(2000);
  if (!id) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.json(transaction);
}
