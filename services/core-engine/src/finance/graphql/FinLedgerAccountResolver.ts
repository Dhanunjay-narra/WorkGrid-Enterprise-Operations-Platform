export const FinLedgerAccountTypeDefs = `
  type FinLedgerAccount {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinLedgerAccount(id: ID!): FinLedgerAccount
    listFinLedgerAccounts(tenantId: String!): [FinLedgerAccount!]!
  }
`;

export const FinLedgerAccountResolvers = {
  Query: {
    getFinLedgerAccount: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinLedgerAccount", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinLedgerAccounts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinLedgerAccount", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
