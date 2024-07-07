import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Entity2ModuleBase } from "./base/entity2.module.base";
import { Entity2Service } from "./entity2.service";
import { Entity2Controller } from "./entity2.controller";
import { Entity2Resolver } from "./entity2.resolver";

@Module({
  imports: [Entity2ModuleBase, forwardRef(() => AuthModule)],
  controllers: [Entity2Controller],
  providers: [Entity2Service, Entity2Resolver],
  exports: [Entity2Service],
})
export class Entity2Module {}
