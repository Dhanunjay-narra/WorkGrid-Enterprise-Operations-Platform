export const ObsProfilingReportGqlTypeDefs = `
  type ObsProfilingReport {
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
    getObsProfilingReport(id: ID!): ObsProfilingReport
    listObsProfilingReports(tenantId: String!, limit: Int): [ObsProfilingReport!]!
  }

  extend type Mutation {
    createObsProfilingReport(tenantId: String!, code: String!, name: String!): ObsProfilingReport!
    deleteObsProfilingReport(id: ID!): Boolean!
  }
`;

export const ObsProfilingReportGqlResolvers = {
  Query: {
    getObsProfilingReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
