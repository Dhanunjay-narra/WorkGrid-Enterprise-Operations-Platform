export const FinBankReconciliationMutationTypeDefs = `
  input CreateFinBankReconciliationInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinBankReconciliation(input: CreateFinBankReconciliationInput!): FinBankReconciliation!
    deleteFinBankReconciliation(id: ID!): Boolean!
  }
`;

export const FinBankReconciliationMutationResolvers = {
  Mutation: {
    createFinBankReconciliation: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinBankReconciliation: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
