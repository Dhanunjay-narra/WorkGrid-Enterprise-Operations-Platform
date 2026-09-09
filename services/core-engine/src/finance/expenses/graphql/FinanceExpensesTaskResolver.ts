export const FinanceExpensesTaskGqlTypeDefs = `
  type FinanceExpensesTask {
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
    getFinanceExpensesTask(id: ID!): FinanceExpensesTask
    listFinanceExpensesTasks(tenantId: String!, limit: Int): [FinanceExpensesTask!]!
  }

  extend type Mutation {
    createFinanceExpensesTask(tenantId: String!, code: String!, name: String!): FinanceExpensesTask!
    deleteFinanceExpensesTask(id: ID!): Boolean!
  }
`;

export const FinanceExpensesTaskGqlResolvers = {
  Query: {
    getFinanceExpensesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
