export const FinanceForecastReportGqlTypeDefs = `
  type FinanceForecastReport {
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
    getFinanceForecastReport(id: ID!): FinanceForecastReport
    listFinanceForecastReports(tenantId: String!, limit: Int): [FinanceForecastReport!]!
  }

  extend type Mutation {
    createFinanceForecastReport(tenantId: String!, code: String!, name: String!): FinanceForecastReport!
    deleteFinanceForecastReport(id: ID!): Boolean!
  }
`;

export const FinanceForecastReportGqlResolvers = {
  Query: {
    getFinanceForecastReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
