export const FinanceLedgerEntryGqlTypeDefs = `
  type FinanceLedgerEntry {
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
    getFinanceLedgerEntry(id: ID!): FinanceLedgerEntry
    listFinanceLedgerEntrys(tenantId: String!, limit: Int): [FinanceLedgerEntry!]!
  }

  extend type Mutation {
    createFinanceLedgerEntry(tenantId: String!, code: String!, name: String!): FinanceLedgerEntry!
    deleteFinanceLedgerEntry(id: ID!): Boolean!
  }
`;

export const FinanceLedgerEntryGqlResolvers = {
  Query: {
    getFinanceLedgerEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
