export const FinanceLedgerMetricGqlTypeDefs = `
  type FinanceLedgerMetric {
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
    getFinanceLedgerMetric(id: ID!): FinanceLedgerMetric
    listFinanceLedgerMetrics(tenantId: String!, limit: Int): [FinanceLedgerMetric!]!
  }

  extend type Mutation {
    createFinanceLedgerMetric(tenantId: String!, code: String!, name: String!): FinanceLedgerMetric!
    deleteFinanceLedgerMetric(id: ID!): Boolean!
  }
`;

export const FinanceLedgerMetricGqlResolvers = {
  Query: {
    getFinanceLedgerMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
