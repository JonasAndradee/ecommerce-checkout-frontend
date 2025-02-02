export type PaymentType = "card";
export type TransactionStatus = "authorized" | "failed";

export interface Item {
  name: string;
  quantity: number;
  amount: number;
}

export interface Address {
  city: string;
  street: string;
  number: string;
  country: string;
  state: string;
  neighborhood: string;
}

export interface Document {
  type: DocumentType;
  number: string;
}
