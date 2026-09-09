export const FinBankReconciliationTypeDefs = `
  type FinBankReconciliation {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinBankReconciliation(id: ID!): FinBankReconciliation
    listFinBankReconciliations(tenantId: String!): [FinBankReconciliation!]!
  }
`;

export const FinBankReconciliationResolvers = {
  Query: {
    getFinBankReconciliation: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinBankReconciliation", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinBankReconciliations: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinBankReconciliation", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
