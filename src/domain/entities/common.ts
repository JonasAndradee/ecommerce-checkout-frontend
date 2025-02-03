export type DocumentType = "cpf" | "cnpj";
export type TransactionStatus = "authorized" | "failed";
export type PaymentType = "card";

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

export interface Item {
  name: string;
  quantity: number;
  amount: number;
}
