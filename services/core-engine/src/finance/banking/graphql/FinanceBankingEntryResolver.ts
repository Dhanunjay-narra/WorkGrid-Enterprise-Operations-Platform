export const FinanceBankingEntryGqlTypeDefs = `
  type FinanceBankingEntry {
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
    getFinanceBankingEntry(id: ID!): FinanceBankingEntry
    listFinanceBankingEntrys(tenantId: String!, limit: Int): [FinanceBankingEntry!]!
  }

  extend type Mutation {
    createFinanceBankingEntry(tenantId: String!, code: String!, name: String!): FinanceBankingEntry!
    deleteFinanceBankingEntry(id: ID!): Boolean!
  }
`;

export const FinanceBankingEntryGqlResolvers = {
  Query: {
    getFinanceBankingEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
