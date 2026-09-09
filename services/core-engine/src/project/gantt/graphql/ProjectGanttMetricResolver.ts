export const ProjectGanttMetricGqlTypeDefs = `
  type ProjectGanttMetric {
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
    getProjectGanttMetric(id: ID!): ProjectGanttMetric
    listProjectGanttMetrics(tenantId: String!, limit: Int): [ProjectGanttMetric!]!
  }

  extend type Mutation {
    createProjectGanttMetric(tenantId: String!, code: String!, name: String!): ProjectGanttMetric!
    deleteProjectGanttMetric(id: ID!): Boolean!
  }
`;

export const ProjectGanttMetricGqlResolvers = {
  Query: {
    getProjectGanttMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
