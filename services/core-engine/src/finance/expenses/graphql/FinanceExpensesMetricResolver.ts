export const FinanceExpensesMetricGqlTypeDefs = `
  type FinanceExpensesMetric {
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
    getFinanceExpensesMetric(id: ID!): FinanceExpensesMetric
    listFinanceExpensesMetrics(tenantId: String!, limit: Int): [FinanceExpensesMetric!]!
  }

  extend type Mutation {
    createFinanceExpensesMetric(tenantId: String!, code: String!, name: String!): FinanceExpensesMetric!
    deleteFinanceExpensesMetric(id: ID!): Boolean!
  }
`;

export const FinanceExpensesMetricGqlResolvers = {
  Query: {
    getFinanceExpensesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
