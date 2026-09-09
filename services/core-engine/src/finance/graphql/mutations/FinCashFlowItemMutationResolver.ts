export const FinCashFlowItemMutationTypeDefs = `
  input CreateFinCashFlowItemInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinCashFlowItem(input: CreateFinCashFlowItemInput!): FinCashFlowItem!
    deleteFinCashFlowItem(id: ID!): Boolean!
  }
`;

export const FinCashFlowItemMutationResolvers = {
  Mutation: {
    createFinCashFlowItem: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinCashFlowItem: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
