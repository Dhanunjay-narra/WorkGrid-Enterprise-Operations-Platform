export const ObsTracingMetricGqlTypeDefs = `
  type ObsTracingMetric {
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
    getObsTracingMetric(id: ID!): ObsTracingMetric
    listObsTracingMetrics(tenantId: String!, limit: Int): [ObsTracingMetric!]!
  }

  extend type Mutation {
    createObsTracingMetric(tenantId: String!, code: String!, name: String!): ObsTracingMetric!
    deleteObsTracingMetric(id: ID!): Boolean!
  }
`;

export const ObsTracingMetricGqlResolvers = {
  Query: {
    getObsTracingMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
