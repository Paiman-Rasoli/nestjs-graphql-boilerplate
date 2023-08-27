import { EntitySchema, EntitySchemaOptions } from 'typeorm';
import { CompanyDomain } from '../company.domain';
import { INT_ID_COLUMN_OPTIONS } from 'libs/utils/db/id-utils';

export type CompanyEntity = CompanyDomain;

export const companySchema: EntitySchemaOptions<CompanyEntity> = {
  name: 'app_company',
  tableName: 'app_company',
  columns: {
    id: {
      ...INT_ID_COLUMN_OPTIONS,
      primary: true,
    },
    name: {
      type: 'varchar',
    },
    size: {
      type: 'int',
    },
    workPhone: {
      type: 'varchar',
      nullable: true,
    },
    createdAt: {
      type: 'datetime',
      createDate: true,
    },
    updatedAt: {
      type: 'datetime',
      createDate: true,
      nullable: true,
    },
  },
};
export const CompanySchema = new EntitySchema<CompanyEntity>(companySchema);
