export const ProjectCapacityReportGqlTypeDefs = `
  type ProjectCapacityReport {
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
    getProjectCapacityReport(id: ID!): ProjectCapacityReport
    listProjectCapacityReports(tenantId: String!, limit: Int): [ProjectCapacityReport!]!
  }

  extend type Mutation {
    createProjectCapacityReport(tenantId: String!, code: String!, name: String!): ProjectCapacityReport!
    deleteProjectCapacityReport(id: ID!): Boolean!
  }
`;

export const ProjectCapacityReportGqlResolvers = {
  Query: {
    getProjectCapacityReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
