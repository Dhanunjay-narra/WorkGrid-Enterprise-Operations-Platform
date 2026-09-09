export const IdPolicyMutationTypeDefs = `
  input CreateIdPolicyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdPolicy(input: CreateIdPolicyInput!): IdPolicy!
    deleteIdPolicy(id: ID!): Boolean!
  }
`;

export const IdPolicyMutationResolvers = {
  Mutation: {
    createIdPolicy: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdPolicy: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
