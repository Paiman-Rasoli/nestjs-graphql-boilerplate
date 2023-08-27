import { EntitySchema } from 'typeorm';
import { SetMetadata } from '@nestjs/common';

export const TYPEORM_ENTITY_REPOSITORY = 'TYPEORM_ENTITY_REPOSITORY';

export function TypeOrmEntityRepository(
  entity: EntitySchema<any>,
): ClassDecorator {
  return SetMetadata(TYPEORM_ENTITY_REPOSITORY, entity);
}
