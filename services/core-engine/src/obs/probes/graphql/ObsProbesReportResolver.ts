export const ObsProbesReportGqlTypeDefs = `
  type ObsProbesReport {
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
    getObsProbesReport(id: ID!): ObsProbesReport
    listObsProbesReports(tenantId: String!, limit: Int): [ObsProbesReport!]!
  }

  extend type Mutation {
    createObsProbesReport(tenantId: String!, code: String!, name: String!): ObsProbesReport!
    deleteObsProbesReport(id: ID!): Boolean!
  }
`;

export const ObsProbesReportGqlResolvers = {
  Query: {
    getObsProbesReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
