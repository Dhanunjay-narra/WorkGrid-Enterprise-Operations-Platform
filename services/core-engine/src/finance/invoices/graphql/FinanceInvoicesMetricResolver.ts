export const FinanceInvoicesMetricGqlTypeDefs = `
  type FinanceInvoicesMetric {
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
    getFinanceInvoicesMetric(id: ID!): FinanceInvoicesMetric
    listFinanceInvoicesMetrics(tenantId: String!, limit: Int): [FinanceInvoicesMetric!]!
  }

  extend type Mutation {
    createFinanceInvoicesMetric(tenantId: String!, code: String!, name: String!): FinanceInvoicesMetric!
    deleteFinanceInvoicesMetric(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesMetricGqlResolvers = {
  Query: {
    getFinanceInvoicesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
