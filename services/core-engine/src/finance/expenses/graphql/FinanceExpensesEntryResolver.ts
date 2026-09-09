export const FinanceExpensesEntryGqlTypeDefs = `
  type FinanceExpensesEntry {
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
    getFinanceExpensesEntry(id: ID!): FinanceExpensesEntry
    listFinanceExpensesEntrys(tenantId: String!, limit: Int): [FinanceExpensesEntry!]!
  }

  extend type Mutation {
    createFinanceExpensesEntry(tenantId: String!, code: String!, name: String!): FinanceExpensesEntry!
    deleteFinanceExpensesEntry(id: ID!): Boolean!
  }
`;

export const FinanceExpensesEntryGqlResolvers = {
  Query: {
    getFinanceExpensesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
