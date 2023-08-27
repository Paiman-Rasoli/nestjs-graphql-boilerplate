import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCompanyTable1693150486500 implements MigrationInterface {
  name = 'CreateCompanyTable1693150486500';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`app_company\` (\`id\` int UNSIGNED NOT NULL, \`name\` varchar(255) NOT NULL, \`size\` int NOT NULL, \`workPhone\` varchar(255) NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`app_company\``);
  }
}
