export const FinanceTreasuryEntryGqlTypeDefs = `
  type FinanceTreasuryEntry {
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
    getFinanceTreasuryEntry(id: ID!): FinanceTreasuryEntry
    listFinanceTreasuryEntrys(tenantId: String!, limit: Int): [FinanceTreasuryEntry!]!
  }

  extend type Mutation {
    createFinanceTreasuryEntry(tenantId: String!, code: String!, name: String!): FinanceTreasuryEntry!
    deleteFinanceTreasuryEntry(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryEntryGqlResolvers = {
  Query: {
    getFinanceTreasuryEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
