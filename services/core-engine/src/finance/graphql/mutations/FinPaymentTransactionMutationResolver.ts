export const FinPaymentTransactionMutationTypeDefs = `
  input CreateFinPaymentTransactionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinPaymentTransaction(input: CreateFinPaymentTransactionInput!): FinPaymentTransaction!
    deleteFinPaymentTransaction(id: ID!): Boolean!
  }
`;

export const FinPaymentTransactionMutationResolvers = {
  Mutation: {
    createFinPaymentTransaction: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinPaymentTransaction: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
