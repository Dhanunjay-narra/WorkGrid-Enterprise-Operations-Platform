export const FinanceForecastMetricGqlTypeDefs = `
  type FinanceForecastMetric {
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
    getFinanceForecastMetric(id: ID!): FinanceForecastMetric
    listFinanceForecastMetrics(tenantId: String!, limit: Int): [FinanceForecastMetric!]!
  }

  extend type Mutation {
    createFinanceForecastMetric(tenantId: String!, code: String!, name: String!): FinanceForecastMetric!
    deleteFinanceForecastMetric(id: ID!): Boolean!
  }
`;

export const FinanceForecastMetricGqlResolvers = {
  Query: {
    getFinanceForecastMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
