import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Entity2ServiceBase } from "./base/entity2.service.base";

@Injectable()
export class Entity2Service extends Entity2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
