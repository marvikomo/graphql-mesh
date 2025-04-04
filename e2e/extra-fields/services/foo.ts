import { createServer } from 'http';
import { createSchema, createYoga } from 'graphql-yoga';
import { Opts } from '@e2e/opts';

const opts = Opts(process.argv);

createServer(
  createYoga({
    schema: createSchema<any>({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: Foo
        }

        type Foo {
          id: ID!
        }
      `,
      resolvers: {
        Query: {
          foo() {
            return { id: '1' };
          },
        },
      },
    }),
  }),
).listen(opts.getServicePort('foo'));
