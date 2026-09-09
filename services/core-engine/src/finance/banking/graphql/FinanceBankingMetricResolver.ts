export const FinanceBankingMetricGqlTypeDefs = `
  type FinanceBankingMetric {
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
    getFinanceBankingMetric(id: ID!): FinanceBankingMetric
    listFinanceBankingMetrics(tenantId: String!, limit: Int): [FinanceBankingMetric!]!
  }

  extend type Mutation {
    createFinanceBankingMetric(tenantId: String!, code: String!, name: String!): FinanceBankingMetric!
    deleteFinanceBankingMetric(id: ID!): Boolean!
  }
`;

export const FinanceBankingMetricGqlResolvers = {
  Query: {
    getFinanceBankingMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
