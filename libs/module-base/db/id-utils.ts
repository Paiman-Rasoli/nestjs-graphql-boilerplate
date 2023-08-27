import { EntitySchemaColumnOptions } from 'typeorm';

export const UUID_COLUMN_OPTIONS: EntitySchemaColumnOptions = {
  type: 'varchar',
  length: 22,
} as const;

export const INT_ID_COLUMN_OPTIONS: EntitySchemaColumnOptions = {
  type: 'int',
  unsigned: true,
} as const;
