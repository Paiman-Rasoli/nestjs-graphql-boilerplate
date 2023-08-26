import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CompanyCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  size: number;

  @Field(() => String, { nullable: true })
  workPhone?: string;
}
