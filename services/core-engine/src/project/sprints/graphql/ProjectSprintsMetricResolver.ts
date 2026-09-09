export const ProjectSprintsMetricGqlTypeDefs = `
  type ProjectSprintsMetric {
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
    getProjectSprintsMetric(id: ID!): ProjectSprintsMetric
    listProjectSprintsMetrics(tenantId: String!, limit: Int): [ProjectSprintsMetric!]!
  }

  extend type Mutation {
    createProjectSprintsMetric(tenantId: String!, code: String!, name: String!): ProjectSprintsMetric!
    deleteProjectSprintsMetric(id: ID!): Boolean!
  }
`;

export const ProjectSprintsMetricGqlResolvers = {
  Query: {
    getProjectSprintsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
