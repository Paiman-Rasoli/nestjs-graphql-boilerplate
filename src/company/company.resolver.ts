import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Company } from './dtos/types.dto';
import { CompanyService } from './company.service';
import { CompanyCreateInput } from './dtos/inputs.dto';

@Resolver(Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company], { nullable: 'itemsAndList' })
  async companies(): Promise<Company[]> {
    return this.companyService.companies();
  }

  @Mutation(() => Company)
  async companyCreate(
    @Args('input') input: CompanyCreateInput,
  ): Promise<Company> {
    return this.companyService.create(input);
  }
}
