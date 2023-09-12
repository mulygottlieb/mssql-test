import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  createdAt?: Date;
  updatedAt?: Date;
  email?: string;
  user?: UserWhereUniqueInput | null;
};
