import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostListRelationFilter } from "./PostListRelationFilter";

export type PostWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  published?: BooleanFilter;
  title?: StringFilter;
  authorId?: IntNullableFilter;
  parent?: PostWhereUniqueInput;
  children?: PostListRelationFilter;
};
