import { Decimal } from "decimal.js";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email: string;
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
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
