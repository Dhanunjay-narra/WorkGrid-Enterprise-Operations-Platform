export const FinanceExpensesMappingGqlTypeDefs = `
  type FinanceExpensesMapping {
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
    getFinanceExpensesMapping(id: ID!): FinanceExpensesMapping
    listFinanceExpensesMappings(tenantId: String!, limit: Int): [FinanceExpensesMapping!]!
  }

  extend type Mutation {
    createFinanceExpensesMapping(tenantId: String!, code: String!, name: String!): FinanceExpensesMapping!
    deleteFinanceExpensesMapping(id: ID!): Boolean!
  }
`;

export const FinanceExpensesMappingGqlResolvers = {
  Query: {
    getFinanceExpensesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
