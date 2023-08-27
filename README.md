# NestJs + GraphQL + TypeORM + MySQL boilerplate.

Implement the best practices for creating a NestJs application with mentioned techs.

## Environment Variables

The envs for various stages can be found in `libs/module-base/config/envs`

## Migrations

The migration scripts exist in `package.json`
to run the migrations in dev environment:

```
yarn run typeorm:run-migrations:dev
```

in order to create new migration according to new entity or new changes to schema you can use the script:

```
npm_config_NAME="add-a-new-column-to-company" yarn typeorm:generate-migration:dev
```
