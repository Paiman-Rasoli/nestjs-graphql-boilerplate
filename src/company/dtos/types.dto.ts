import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  size: number;

  @Field(() => String, { nullable: true })
  workPhone?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
