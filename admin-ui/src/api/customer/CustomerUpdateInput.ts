import { Decimal } from "decimal.js";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  isVip?: boolean | null;
  birthData?: Date | null;
  averageSale?: Decimal | null;
  favoriteNumber?: number | null;
  geoLocation?: string | null;
  comments?: string | null;
  favoriteColors?: string | null;
  customerType?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  vipOrganization?: OrganizationWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
