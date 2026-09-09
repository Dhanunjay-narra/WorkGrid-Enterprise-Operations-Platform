export const FinanceForecastSummaryGqlTypeDefs = `
  type FinanceForecastSummary {
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
    getFinanceForecastSummary(id: ID!): FinanceForecastSummary
    listFinanceForecastSummarys(tenantId: String!, limit: Int): [FinanceForecastSummary!]!
  }

  extend type Mutation {
    createFinanceForecastSummary(tenantId: String!, code: String!, name: String!): FinanceForecastSummary!
    deleteFinanceForecastSummary(id: ID!): Boolean!
  }
`;

export const FinanceForecastSummaryGqlResolvers = {
  Query: {
    getFinanceForecastSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
