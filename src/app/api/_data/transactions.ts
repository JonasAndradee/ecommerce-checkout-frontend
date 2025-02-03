import { TransactionResponse } from "@/domain/entities/transaction";

export const transactions: TransactionResponse[] = [
  {
    id: "eace0041-723c-44b2-887d-631878171bbf",
    status: "authorized",
    amount: 1000,
    customer: {
      firstName: "João",
      lastName: "Silva",
      document: {
        type: "cpf",
        number: "12345678900",
      },
      address: {
        city: "São Paulo",
        street: "Av Paulista",
        number: "1000",
        country: "Brasil",
        state: "SP",
        neighborhood: "Bela Vista",
      },
    },
    items: [
      {
        name: "Produto 1",
        quantity: 1,
        amount: 1000,
      },
    ],
    paymentMethod: {
      type: "card",
      card: {
        firstDigits: "1234",
        lastDigits: "4321",
        holderName: "João Silva",
        expirationDate: "12/2025",
        installments: 1,
      },
    },
  },
];
