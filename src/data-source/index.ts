import { configuration } from 'libs/module-base';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CompanySchema } from '../company/datastore/company.entity';
import { CreateCompanyTable1693150486500 } from '../../migrations/1693150486500-create-company-table';

const dbGeneralConfig = (): DataSourceOptions => {
  const config = configuration();

  switch (config.DB_TYPE) {
    case 'mysql':
      return {
        type: config.DB_TYPE,
        database: config.DB_NAME,
        host: config.DB_HOST,
        port: +config.DB_PORT,
        username: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        synchronize: false,
        logging: false,
        migrationsRun: false,
      };
    case 'sqlite':
      return {
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        synchronize: true,
        logging: false,
        migrationsRun: false,
      };
    default:
      throw new Error('Invalid database config type: ' + config.DB_TYPE);
  }
};

export const dataSourceOptions: DataSourceOptions = {
  ...dbGeneralConfig(),
  entities: [CompanySchema],
  migrations: [CreateCompanyTable1693150486500],
  migrationsTableName: 'migrations',
};

export const dataSource = new DataSource(dataSourceOptions);
