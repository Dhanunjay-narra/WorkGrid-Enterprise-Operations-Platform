export const ObsLoggingReportGqlTypeDefs = `
  type ObsLoggingReport {
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
    getObsLoggingReport(id: ID!): ObsLoggingReport
    listObsLoggingReports(tenantId: String!, limit: Int): [ObsLoggingReport!]!
  }

  extend type Mutation {
    createObsLoggingReport(tenantId: String!, code: String!, name: String!): ObsLoggingReport!
    deleteObsLoggingReport(id: ID!): Boolean!
  }
`;

export const ObsLoggingReportGqlResolvers = {
  Query: {
    getObsLoggingReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
