export const ProjectTasksMetricGqlTypeDefs = `
  type ProjectTasksMetric {
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
    getProjectTasksMetric(id: ID!): ProjectTasksMetric
    listProjectTasksMetrics(tenantId: String!, limit: Int): [ProjectTasksMetric!]!
  }

  extend type Mutation {
    createProjectTasksMetric(tenantId: String!, code: String!, name: String!): ProjectTasksMetric!
    deleteProjectTasksMetric(id: ID!): Boolean!
  }
`;

export const ProjectTasksMetricGqlResolvers = {
  Query: {
    getProjectTasksMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
