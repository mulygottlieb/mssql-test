import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostService } from "./post.service";
import { PostControllerBase } from "./base/post.controller.base";

@swagger.ApiTags("posts")
@common.Controller("posts")
export class PostController extends PostControllerBase {
  constructor(protected readonly service: PostService) {
    super(service);
  }
}
