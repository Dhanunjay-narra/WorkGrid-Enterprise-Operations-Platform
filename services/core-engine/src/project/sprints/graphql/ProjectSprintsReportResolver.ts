export const ProjectSprintsReportGqlTypeDefs = `
  type ProjectSprintsReport {
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
    getProjectSprintsReport(id: ID!): ProjectSprintsReport
    listProjectSprintsReports(tenantId: String!, limit: Int): [ProjectSprintsReport!]!
  }

  extend type Mutation {
    createProjectSprintsReport(tenantId: String!, code: String!, name: String!): ProjectSprintsReport!
    deleteProjectSprintsReport(id: ID!): Boolean!
  }
`;

export const ProjectSprintsReportGqlResolvers = {
  Query: {
    getProjectSprintsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
