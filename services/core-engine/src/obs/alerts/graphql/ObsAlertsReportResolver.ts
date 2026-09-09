export const ObsAlertsReportGqlTypeDefs = `
  type ObsAlertsReport {
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
    getObsAlertsReport(id: ID!): ObsAlertsReport
    listObsAlertsReports(tenantId: String!, limit: Int): [ObsAlertsReport!]!
  }

  extend type Mutation {
    createObsAlertsReport(tenantId: String!, code: String!, name: String!): ObsAlertsReport!
    deleteObsAlertsReport(id: ID!): Boolean!
  }
`;

export const ObsAlertsReportGqlResolvers = {
  Query: {
    getObsAlertsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
