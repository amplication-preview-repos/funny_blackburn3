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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Entity2OrderByInput } from "./Entity2OrderByInput";

@ArgsType()
class Entity2FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => Entity2WhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => Entity2WhereInput, { nullable: true })
  @Type(() => Entity2WhereInput)
  where?: Entity2WhereInput;

  @ApiProperty({
    required: false,
    type: [Entity2OrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [Entity2OrderByInput], { nullable: true })
  @Type(() => Entity2OrderByInput)
  orderBy?: Array<Entity2OrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { Entity2FindManyArgs as Entity2FindManyArgs };