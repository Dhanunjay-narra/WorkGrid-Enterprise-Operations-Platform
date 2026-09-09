export const ProjectRisksMetricGqlTypeDefs = `
  type ProjectRisksMetric {
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
    getProjectRisksMetric(id: ID!): ProjectRisksMetric
    listProjectRisksMetrics(tenantId: String!, limit: Int): [ProjectRisksMetric!]!
  }

  extend type Mutation {
    createProjectRisksMetric(tenantId: String!, code: String!, name: String!): ProjectRisksMetric!
    deleteProjectRisksMetric(id: ID!): Boolean!
  }
`;

export const ProjectRisksMetricGqlResolvers = {
  Query: {
    getProjectRisksMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
