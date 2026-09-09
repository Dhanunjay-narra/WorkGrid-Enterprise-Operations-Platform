export const FinanceTaxesMetricGqlTypeDefs = `
  type FinanceTaxesMetric {
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
    getFinanceTaxesMetric(id: ID!): FinanceTaxesMetric
    listFinanceTaxesMetrics(tenantId: String!, limit: Int): [FinanceTaxesMetric!]!
  }

  extend type Mutation {
    createFinanceTaxesMetric(tenantId: String!, code: String!, name: String!): FinanceTaxesMetric!
    deleteFinanceTaxesMetric(id: ID!): Boolean!
  }
`;

export const FinanceTaxesMetricGqlResolvers = {
  Query: {
    getFinanceTaxesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
