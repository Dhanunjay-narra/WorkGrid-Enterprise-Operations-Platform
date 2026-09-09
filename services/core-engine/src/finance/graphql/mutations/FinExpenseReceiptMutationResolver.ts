export const FinExpenseReceiptMutationTypeDefs = `
  input CreateFinExpenseReceiptInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinExpenseReceipt(input: CreateFinExpenseReceiptInput!): FinExpenseReceipt!
    deleteFinExpenseReceipt(id: ID!): Boolean!
  }
`;

export const FinExpenseReceiptMutationResolvers = {
  Mutation: {
    createFinExpenseReceipt: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinExpenseReceipt: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
