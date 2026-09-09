export const PrjSubtaskMutationTypeDefs = `
  input CreatePrjSubtaskInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjSubtask(input: CreatePrjSubtaskInput!): PrjSubtask!
    deletePrjSubtask(id: ID!): Boolean!
  }
`;

export const PrjSubtaskMutationResolvers = {
  Mutation: {
    createPrjSubtask: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjSubtask: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
