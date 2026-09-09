export const ObsProfilingMetricGqlTypeDefs = `
  type ObsProfilingMetric {
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
    getObsProfilingMetric(id: ID!): ObsProfilingMetric
    listObsProfilingMetrics(tenantId: String!, limit: Int): [ObsProfilingMetric!]!
  }

  extend type Mutation {
    createObsProfilingMetric(tenantId: String!, code: String!, name: String!): ObsProfilingMetric!
    deleteObsProfilingMetric(id: ID!): Boolean!
  }
`;

export const ObsProfilingMetricGqlResolvers = {
  Query: {
    getObsProfilingMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
