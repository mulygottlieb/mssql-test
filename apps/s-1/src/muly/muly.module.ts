import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MulyModuleBase } from "./base/muly.module.base";
import { MulyService } from "./muly.service";
import { MulyController } from "./muly.controller";
import { MulyResolver } from "./muly.resolver";

@Module({
  imports: [MulyModuleBase, forwardRef(() => AuthModule)],
  controllers: [MulyController],
  providers: [MulyService, MulyResolver],
  exports: [MulyService],
})
export class MulyModule {}
