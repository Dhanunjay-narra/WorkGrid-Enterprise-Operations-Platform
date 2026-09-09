export const SupportSurveysReportGqlTypeDefs = `
  type SupportSurveysReport {
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
    getSupportSurveysReport(id: ID!): SupportSurveysReport
    listSupportSurveysReports(tenantId: String!, limit: Int): [SupportSurveysReport!]!
  }

  extend type Mutation {
    createSupportSurveysReport(tenantId: String!, code: String!, name: String!): SupportSurveysReport!
    deleteSupportSurveysReport(id: ID!): Boolean!
  }
`;

export const SupportSurveysReportGqlResolvers = {
  Query: {
    getSupportSurveysReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
