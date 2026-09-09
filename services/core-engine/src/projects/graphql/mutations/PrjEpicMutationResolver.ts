export const PrjEpicMutationTypeDefs = `
  input CreatePrjEpicInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjEpic(input: CreatePrjEpicInput!): PrjEpic!
    deletePrjEpic(id: ID!): Boolean!
  }
`;

export const PrjEpicMutationResolvers = {
  Mutation: {
    createPrjEpic: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjEpic: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
