export const FinanceTaxesEntryGqlTypeDefs = `
  type FinanceTaxesEntry {
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
    getFinanceTaxesEntry(id: ID!): FinanceTaxesEntry
    listFinanceTaxesEntrys(tenantId: String!, limit: Int): [FinanceTaxesEntry!]!
  }

  extend type Mutation {
    createFinanceTaxesEntry(tenantId: String!, code: String!, name: String!): FinanceTaxesEntry!
    deleteFinanceTaxesEntry(id: ID!): Boolean!
  }
`;

export const FinanceTaxesEntryGqlResolvers = {
  Query: {
    getFinanceTaxesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
