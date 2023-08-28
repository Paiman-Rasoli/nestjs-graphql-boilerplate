import { mockCompany, mockCompanyCreateInput } from './__mock__';
import { CompanyService } from './company.service';
import { CompanyRepository } from './datastore/company.repository';
import { CompanyNotFoundException } from './errors';

describe('CompanyService', () => {
  let companyService: CompanyService;
  let companyRepository: CompanyRepository;

  beforeEach(() => {
    companyRepository = {
      createCompany: jest.fn().mockResolvedValue(mockCompany),
    } as unknown as CompanyRepository;
    companyService = new CompanyService(companyRepository);
  });

  it('should be defined', () => {
    expect(companyService).toBeDefined();
  });

  describe('create', () => {
    it('creates a new company', async () => {
      const result = await companyService.create(mockCompanyCreateInput);
      expect(result).toBeTruthy();
      expect(companyRepository.createCompany).toHaveBeenCalledWith(
        mockCompanyCreateInput,
      );
    });
  });

  describe('get a company by id', () => {
    it('return an existed company', async () => {
      const existedCompanyId = 887541244;
      companyRepository.getCompanyById = jest
        .fn()
        .mockResolvedValue(mockCompany);

      const company = await companyService.company(existedCompanyId);
      expect(company).toBeTruthy();
      expect(companyRepository.getCompanyById).toHaveBeenCalledWith(
        existedCompanyId,
      );
    });

    it('throws error if company not found', async () => {
      const nonExistedCompanyId = 887541244;
      companyRepository.getCompanyById = jest.fn().mockResolvedValue(null);
      let company;
      let error;
      try {
        company = await companyService.company(nonExistedCompanyId);
      } catch (err) {
        error = err;
      }

      expect(companyRepository.getCompanyById).toHaveBeenCalledWith(
        nonExistedCompanyId,
      );
      expect(company).toBeFalsy();
      expect(error).toBeTruthy();
      expect(error).toBeInstanceOf(CompanyNotFoundException);
    });
  });
});
