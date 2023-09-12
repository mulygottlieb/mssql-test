import { Organization } from "../organization/Organization";
import { Profile } from "../profile/Profile";

export type User = {
  id: string;
  name: string;
  bio: string;
  email: string;
  age: number;
  birthDate: Date;
  score: number;
  manager?: User | null;
  employees?: Array<User>;
  organizations?: Array<Organization>;
  interests: string;
  priority: string;
  isCurious: boolean;
  location: string;
  extendedProperties: string;
  profile?: Profile | null;
};
