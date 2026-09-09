export const FinanceLedgerSnapshotGqlTypeDefs = `
  type FinanceLedgerSnapshot {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getFinanceLedgerSnapshot(id: ID!): FinanceLedgerSnapshot
    listFinanceLedgerSnapshots(tenantId: String!, limit: Int): [FinanceLedgerSnapshot!]!
  }

  extend type Mutation {
    createFinanceLedgerSnapshot(tenantId: String!, code: String!, name: String!): FinanceLedgerSnapshot!
    deleteFinanceLedgerSnapshot(id: ID!): Boolean!
  }
`;

export const FinanceLedgerSnapshotGqlResolvers = {
  Query: {
    getFinanceLedgerSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
