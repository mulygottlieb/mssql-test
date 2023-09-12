import { User } from "../user/User";

export type Profile = {
  id: number;
  createdIn: Date;
  createdAt: Date;
  updatedIn: Date;
  updatedAt: Date;
  email: string;
  user?: User | null;
};
