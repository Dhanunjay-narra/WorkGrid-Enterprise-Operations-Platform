export const BiForecastsReportGqlTypeDefs = `
  type BiForecastsReport {
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
    getBiForecastsReport(id: ID!): BiForecastsReport
    listBiForecastsReports(tenantId: String!, limit: Int): [BiForecastsReport!]!
  }

  extend type Mutation {
    createBiForecastsReport(tenantId: String!, code: String!, name: String!): BiForecastsReport!
    deleteBiForecastsReport(id: ID!): Boolean!
  }
`;

export const BiForecastsReportGqlResolvers = {
  Query: {
    getBiForecastsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
