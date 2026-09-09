export const FinanceBillsEntryGqlTypeDefs = `
  type FinanceBillsEntry {
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
    getFinanceBillsEntry(id: ID!): FinanceBillsEntry
    listFinanceBillsEntrys(tenantId: String!, limit: Int): [FinanceBillsEntry!]!
  }

  extend type Mutation {
    createFinanceBillsEntry(tenantId: String!, code: String!, name: String!): FinanceBillsEntry!
    deleteFinanceBillsEntry(id: ID!): Boolean!
  }
`;

export const FinanceBillsEntryGqlResolvers = {
  Query: {
    getFinanceBillsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
