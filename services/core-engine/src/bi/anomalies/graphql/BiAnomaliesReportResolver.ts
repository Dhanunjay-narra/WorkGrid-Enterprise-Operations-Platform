export const BiAnomaliesReportGqlTypeDefs = `
  type BiAnomaliesReport {
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
    getBiAnomaliesReport(id: ID!): BiAnomaliesReport
    listBiAnomaliesReports(tenantId: String!, limit: Int): [BiAnomaliesReport!]!
  }

  extend type Mutation {
    createBiAnomaliesReport(tenantId: String!, code: String!, name: String!): BiAnomaliesReport!
    deleteBiAnomaliesReport(id: ID!): Boolean!
  }
`;

export const BiAnomaliesReportGqlResolvers = {
  Query: {
    getBiAnomaliesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
