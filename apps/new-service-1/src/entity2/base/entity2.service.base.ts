/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Entity2 as PrismaEntity2 } from "@prisma/client";

export class Entity2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.Entity2CountArgs, "select">): Promise<number> {
    return this.prisma.entity2.count(args);
  }

  async entity2s(args: Prisma.Entity2FindManyArgs): Promise<PrismaEntity2[]> {
    return this.prisma.entity2.findMany(args);
  }
  async entity2(
    args: Prisma.Entity2FindUniqueArgs
  ): Promise<PrismaEntity2 | null> {
    return this.prisma.entity2.findUnique(args);
  }
  async createEntity2(args: Prisma.Entity2CreateArgs): Promise<PrismaEntity2> {
    return this.prisma.entity2.create(args);
  }
  async updateEntity2(args: Prisma.Entity2UpdateArgs): Promise<PrismaEntity2> {
    return this.prisma.entity2.update(args);
  }
  async deleteEntity2(args: Prisma.Entity2DeleteArgs): Promise<PrismaEntity2> {
    return this.prisma.entity2.delete(args);
  }
}