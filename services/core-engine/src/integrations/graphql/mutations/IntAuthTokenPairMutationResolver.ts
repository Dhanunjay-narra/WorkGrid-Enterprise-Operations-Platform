export const IntAuthTokenPairMutationTypeDefs = `
  input CreateIntAuthTokenPairInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIntAuthTokenPair(input: CreateIntAuthTokenPairInput!): IntAuthTokenPair!
    deleteIntAuthTokenPair(id: ID!): Boolean!
  }
`;

export const IntAuthTokenPairMutationResolvers = {
  Mutation: {
    createIntAuthTokenPair: async (_: any, args: { input: any }) => {
      return {
        id: "int_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIntAuthTokenPair: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
