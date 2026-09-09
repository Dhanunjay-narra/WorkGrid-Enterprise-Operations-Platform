export const FinanceTreasuryMetricGqlTypeDefs = `
  type FinanceTreasuryMetric {
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
    getFinanceTreasuryMetric(id: ID!): FinanceTreasuryMetric
    listFinanceTreasuryMetrics(tenantId: String!, limit: Int): [FinanceTreasuryMetric!]!
  }

  extend type Mutation {
    createFinanceTreasuryMetric(tenantId: String!, code: String!, name: String!): FinanceTreasuryMetric!
    deleteFinanceTreasuryMetric(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryMetricGqlResolvers = {
  Query: {
    getFinanceTreasuryMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
