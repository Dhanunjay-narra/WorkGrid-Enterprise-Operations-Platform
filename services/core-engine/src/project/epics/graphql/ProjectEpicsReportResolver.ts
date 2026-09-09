export const ProjectEpicsReportGqlTypeDefs = `
  type ProjectEpicsReport {
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
    getProjectEpicsReport(id: ID!): ProjectEpicsReport
    listProjectEpicsReports(tenantId: String!, limit: Int): [ProjectEpicsReport!]!
  }

  extend type Mutation {
    createProjectEpicsReport(tenantId: String!, code: String!, name: String!): ProjectEpicsReport!
    deleteProjectEpicsReport(id: ID!): Boolean!
  }
`;

export const ProjectEpicsReportGqlResolvers = {
  Query: {
    getProjectEpicsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
