import { PostWhereUniqueInput } from "./PostWhereUniqueInput";
import { PostUpdateManyWithoutPostsInput } from "./PostUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  published?: boolean;
  title?: string;
  authorId?: number | null;
  parent?: PostWhereUniqueInput | null;
  children?: PostUpdateManyWithoutPostsInput;
};
