import { Address, Document } from "./common";

export interface Customer {
  firstName: string;
  lastName: string;
  document: Document;
  address: Address;
}
