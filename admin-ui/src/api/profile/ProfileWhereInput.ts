import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  id?: IntFilter;
  createdIn?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedIn?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  email?: StringFilter;
  user?: UserWhereUniqueInput;
};
