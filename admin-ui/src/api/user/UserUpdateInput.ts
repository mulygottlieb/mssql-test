import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateManyWithoutUsersInput } from "./UserUpdateManyWithoutUsersInput";
import { OrganizationUpdateManyWithoutUsersInput } from "./OrganizationUpdateManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserUpdateInput = {
  name?: string;
  bio?: string;
  email?: string;
  age?: number;
  birthDate?: Date;
  score?: number;
  manager?: UserWhereUniqueInput | null;
  employees?: UserUpdateManyWithoutUsersInput;
  organizations?: OrganizationUpdateManyWithoutUsersInput;
  interests?: string;
  priority?: string;
  isCurious?: boolean;
  location?: string;
  extendedProperties?: string;
  profile?: ProfileWhereUniqueInput | null;
};
