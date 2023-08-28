import { CompanyDomain } from '../company.domain';
import { CompanyCreateInput } from '../dtos/inputs.dto';

export const mockCompanyCreateInput = {
  name: 'GCC',
  size: 250,
  workPhone: '0793151474',
} as CompanyCreateInput;

export const mockCompany = {
  id: 1243,
  name: 'PTT',
  size: 684,
  workPhone: '0793151477',
  createdAt: new Date(),
  updatedAt: new Date(),
} as CompanyDomain;
