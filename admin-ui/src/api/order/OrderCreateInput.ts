import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  customer: CustomerWhereUniqueInput;
  status: string;
  label?: string | null;
};
