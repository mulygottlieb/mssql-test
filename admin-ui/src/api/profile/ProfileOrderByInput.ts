import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  id?: SortOrder;
  createdIn?: SortOrder;
  createdAt?: SortOrder;
  updatedIn?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  userId?: SortOrder;
};
