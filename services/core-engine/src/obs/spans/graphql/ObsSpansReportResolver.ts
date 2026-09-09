export const ObsSpansReportGqlTypeDefs = `
  type ObsSpansReport {
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
    getObsSpansReport(id: ID!): ObsSpansReport
    listObsSpansReports(tenantId: String!, limit: Int): [ObsSpansReport!]!
  }

  extend type Mutation {
    createObsSpansReport(tenantId: String!, code: String!, name: String!): ObsSpansReport!
    deleteObsSpansReport(id: ID!): Boolean!
  }
`;

export const ObsSpansReportGqlResolvers = {
  Query: {
    getObsSpansReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
