/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Entity2WhereInput } from "./Entity2WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Entity2CountArgs {
  @ApiProperty({
    required: false,
    type: () => Entity2WhereInput,
  })
  @Field(() => Entity2WhereInput, { nullable: true })
  @Type(() => Entity2WhereInput)
  where?: Entity2WhereInput;
}

export { Entity2CountArgs as Entity2CountArgs };