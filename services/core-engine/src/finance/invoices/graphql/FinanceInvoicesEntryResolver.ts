export const FinanceInvoicesEntryGqlTypeDefs = `
  type FinanceInvoicesEntry {
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
    getFinanceInvoicesEntry(id: ID!): FinanceInvoicesEntry
    listFinanceInvoicesEntrys(tenantId: String!, limit: Int): [FinanceInvoicesEntry!]!
  }

  extend type Mutation {
    createFinanceInvoicesEntry(tenantId: String!, code: String!, name: String!): FinanceInvoicesEntry!
    deleteFinanceInvoicesEntry(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesEntryGqlResolvers = {
  Query: {
    getFinanceInvoicesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
