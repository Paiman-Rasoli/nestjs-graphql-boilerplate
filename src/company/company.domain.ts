import { Company } from './dtos/types.dto';

export interface CompanyDomain extends Company {
  id: number;

  name: string;

  size: number;

  workPhone?: string;

  createdAt: Date;

  updatedAt?: Date;
}
