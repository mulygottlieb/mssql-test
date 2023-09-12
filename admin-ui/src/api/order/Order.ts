import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customer?: Customer;
  status: string;
  label: string | null;
};
