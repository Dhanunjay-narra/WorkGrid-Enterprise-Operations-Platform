export const ProjectWorkspacesMetricGqlTypeDefs = `
  type ProjectWorkspacesMetric {
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
    getProjectWorkspacesMetric(id: ID!): ProjectWorkspacesMetric
    listProjectWorkspacesMetrics(tenantId: String!, limit: Int): [ProjectWorkspacesMetric!]!
  }

  extend type Mutation {
    createProjectWorkspacesMetric(tenantId: String!, code: String!, name: String!): ProjectWorkspacesMetric!
    deleteProjectWorkspacesMetric(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesMetricGqlResolvers = {
  Query: {
    getProjectWorkspacesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
