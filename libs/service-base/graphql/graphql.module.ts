import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { DynamicModule, Logger, Module } from '@nestjs/common';
import { GraphQLModule as NestJsGraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({})
export class GraphQLModule {
  static forRoot(props: GraphQLModuleProps): DynamicModule {
    return {
      module: GraphQLModule,
      imports: [
        NestJsGraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          playground: props.playground ?? false,
          sortSchema: true,
          context: ({ req, res }) => {
            const rawUser = req.headers['user'];

            if (!rawUser || rawUser === 'undefined') {
              return { user: null, req, res };
            }

            try {
              const user = JSON.parse(rawUser);
              return { user, res, req };
            } catch (e) {
              Logger.error('Could not parse user header: ', rawUser);
              return { user: null, req, res };
            }
          },
          path: '/graphql',
          fieldResolverEnhancers: ['guards', 'interceptors'],
          definitions: props.codeFirstApproach
            ? {}
            : {
                path: `${process.cwd()}/graphql/generated/${
                  props.moduleName
                }.ts`,
                outputAs: 'class',
              },
          typePaths: props.codeFirstApproach
            ? []
            : [join(__dirname, 'schema/**/*.graphql')],
        }),
      ],
    };
  }
}

export interface GraphQLModuleProps {
  moduleName: string;
  codeFirstApproach?: boolean;
  playground?: boolean;
}
