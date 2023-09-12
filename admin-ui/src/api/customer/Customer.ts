import { Decimal } from "decimal.js";
import { Organization } from "../organization/Organization";
import { Order } from "../order/Order";

export type Customer = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  firstName: string | null;
  lastName: string | null;
  isVip: boolean | null;
  birthData: Date | null;
  averageSale: Decimal | null;
  favoriteNumber: number | null;
  geoLocation: string | null;
  comments: string | null;
  favoriteColors: string | null;
  customerType: string | null;
  organization?: Organization | null;
  vipOrganization?: Organization | null;
  orders?: Array<Order>;
};
