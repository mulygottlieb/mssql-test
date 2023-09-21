import * as graphql from "@nestjs/graphql";
import { PostResolverBase } from "./base/post.resolver.base";
import { Post } from "./base/Post";
import { PostService } from "./post.service";

@graphql.Resolver(() => Post)
export class PostResolver extends PostResolverBase {
  constructor(protected readonly service: PostService) {
    super(service);
  }
}
