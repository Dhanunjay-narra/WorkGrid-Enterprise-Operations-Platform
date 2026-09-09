export const ProjectEpicsMetricGqlTypeDefs = `
  type ProjectEpicsMetric {
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
    getProjectEpicsMetric(id: ID!): ProjectEpicsMetric
    listProjectEpicsMetrics(tenantId: String!, limit: Int): [ProjectEpicsMetric!]!
  }

  extend type Mutation {
    createProjectEpicsMetric(tenantId: String!, code: String!, name: String!): ProjectEpicsMetric!
    deleteProjectEpicsMetric(id: ID!): Boolean!
  }
`;

export const ProjectEpicsMetricGqlResolvers = {
  Query: {
    getProjectEpicsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
