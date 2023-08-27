import { CompanyDomain } from '../company.domain';
import { CompanyEntity } from './company.entity';
/**
 *
 * @param entity CompanyEntity
 * @returns CompanyDomain
 * @description we may not need to send all entity data to response, so in here we will adjust the entity according to domain (dto) we specified.
 */
export const mapEntityToDomain = (entity: CompanyEntity): CompanyDomain => {
  if (!entity) return null;

  return {
    id: entity.id,
    name: entity.name,
    size: entity.size,
    workPhone: entity.workPhone,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
  };
};
