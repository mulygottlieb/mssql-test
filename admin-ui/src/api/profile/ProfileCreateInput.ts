import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  createdAt: Date;
  updatedAt: Date;
  email: string;
  user?: UserWhereUniqueInput | null;
};
