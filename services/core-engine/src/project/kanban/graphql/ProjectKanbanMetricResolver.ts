export const ProjectKanbanMetricGqlTypeDefs = `
  type ProjectKanbanMetric {
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
    getProjectKanbanMetric(id: ID!): ProjectKanbanMetric
    listProjectKanbanMetrics(tenantId: String!, limit: Int): [ProjectKanbanMetric!]!
  }

  extend type Mutation {
    createProjectKanbanMetric(tenantId: String!, code: String!, name: String!): ProjectKanbanMetric!
    deleteProjectKanbanMetric(id: ID!): Boolean!
  }
`;

export const ProjectKanbanMetricGqlResolvers = {
  Query: {
    getProjectKanbanMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
