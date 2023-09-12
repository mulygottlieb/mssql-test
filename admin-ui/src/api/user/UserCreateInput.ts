import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserCreateNestedManyWithoutUsersInput } from "./UserCreateNestedManyWithoutUsersInput";
import { OrganizationCreateNestedManyWithoutUsersInput } from "./OrganizationCreateNestedManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserCreateInput = {
  name: string;
  bio: string;
  email: string;
  age: number;
  birthDate: Date;
  score: number;
  manager?: UserWhereUniqueInput | null;
  employees?: UserCreateNestedManyWithoutUsersInput;
  organizations?: OrganizationCreateNestedManyWithoutUsersInput;
  interests: string;
  priority: string;
  isCurious: boolean;
  location: string;
  extendedProperties: string;
  profile?: ProfileWhereUniqueInput | null;
};
