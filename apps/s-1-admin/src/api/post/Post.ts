export type Post = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  authorId: number | null;
  parent?: Post | null;
  children?: Array<Post>;
};
