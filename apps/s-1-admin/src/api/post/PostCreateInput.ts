import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostCreateNestedManyWithoutPostsInput } from "./PostCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  published: boolean;
  title: string;
  authorId?: number | null;
  parent?: PostWhereUniqueInput | null;
  children?: PostCreateNestedManyWithoutPostsInput;
};
