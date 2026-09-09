export const ProjectCapacityMetricGqlTypeDefs = `
  type ProjectCapacityMetric {
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
    getProjectCapacityMetric(id: ID!): ProjectCapacityMetric
    listProjectCapacityMetrics(tenantId: String!, limit: Int): [ProjectCapacityMetric!]!
  }

  extend type Mutation {
    createProjectCapacityMetric(tenantId: String!, code: String!, name: String!): ProjectCapacityMetric!
    deleteProjectCapacityMetric(id: ID!): Boolean!
  }
`;

export const ProjectCapacityMetricGqlResolvers = {
  Query: {
    getProjectCapacityMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
