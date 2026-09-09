export const FinPaymentTransactionTypeDefs = `
  type FinPaymentTransaction {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinPaymentTransaction(id: ID!): FinPaymentTransaction
    listFinPaymentTransactions(tenantId: String!): [FinPaymentTransaction!]!
  }
`;

export const FinPaymentTransactionResolvers = {
  Query: {
    getFinPaymentTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinPaymentTransaction", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinPaymentTransactions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinPaymentTransaction", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
