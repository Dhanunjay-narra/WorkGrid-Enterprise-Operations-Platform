export const FinanceExpensesItemGqlTypeDefs = `
  type FinanceExpensesItem {
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
    getFinanceExpensesItem(id: ID!): FinanceExpensesItem
    listFinanceExpensesItems(tenantId: String!, limit: Int): [FinanceExpensesItem!]!
  }

  extend type Mutation {
    createFinanceExpensesItem(tenantId: String!, code: String!, name: String!): FinanceExpensesItem!
    deleteFinanceExpensesItem(id: ID!): Boolean!
  }
`;

export const FinanceExpensesItemGqlResolvers = {
  Query: {
    getFinanceExpensesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
