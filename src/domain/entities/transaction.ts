import { Customer } from "./customer";
import { Item, TransactionStatus } from "./common";
import { PaymentMethodRequest, PaymentMethodResponse } from "./payment";

export interface TransactionRequest {
  amount: number;
  customer: Customer;
  items: Item[];
  paymentMethod: PaymentMethodRequest;
}

export interface TransactionResponse {
  id?: string;
  status: TransactionStatus;
  amount: number;
  customer: Customer;
  items: Item[];
  paymentMethod: PaymentMethodResponse;
}
