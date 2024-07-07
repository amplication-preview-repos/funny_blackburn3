import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Entity2Service } from "./entity2.service";
import { Entity2ControllerBase } from "./base/entity2.controller.base";

@swagger.ApiTags("entity2s")
@common.Controller("entity2s")
export class Entity2Controller extends Entity2ControllerBase {
  constructor(
    protected readonly service: Entity2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
