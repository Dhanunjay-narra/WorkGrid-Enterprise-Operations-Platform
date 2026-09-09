export const IntOAuthConnectionMutationTypeDefs = `
  input CreateIntOAuthConnectionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntOAuthConnection(input: CreateIntOAuthConnectionInput!): IntOAuthConnection!
    deleteIntOAuthConnection(id: ID!): Boolean!
  }
`;

export const IntOAuthConnectionMutationResolvers = {
  Mutation: {
    createIntOAuthConnection: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntOAuthConnection: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
