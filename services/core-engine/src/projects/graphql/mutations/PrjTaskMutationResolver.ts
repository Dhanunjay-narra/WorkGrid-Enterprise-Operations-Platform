export const PrjTaskMutationTypeDefs = `
  input CreatePrjTaskInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjTask(input: CreatePrjTaskInput!): PrjTask!
    deletePrjTask(id: ID!): Boolean!
  }
`;

export const PrjTaskMutationResolvers = {
  Mutation: {
    createPrjTask: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjTask: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
