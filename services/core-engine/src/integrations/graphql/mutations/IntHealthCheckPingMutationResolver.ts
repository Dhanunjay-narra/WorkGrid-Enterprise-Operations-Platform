export const IntHealthCheckPingMutationTypeDefs = `
  input CreateIntHealthCheckPingInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntHealthCheckPing(input: CreateIntHealthCheckPingInput!): IntHealthCheckPing!
    deleteIntHealthCheckPing(id: ID!): Boolean!
  }
`;

export const IntHealthCheckPingMutationResolvers = {
  Mutation: {
    createIntHealthCheckPing: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntHealthCheckPing: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
