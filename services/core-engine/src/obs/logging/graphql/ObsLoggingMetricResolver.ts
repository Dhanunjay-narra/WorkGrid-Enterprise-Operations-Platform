export const ObsLoggingMetricGqlTypeDefs = `
  type ObsLoggingMetric {
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
    getObsLoggingMetric(id: ID!): ObsLoggingMetric
    listObsLoggingMetrics(tenantId: String!, limit: Int): [ObsLoggingMetric!]!
  }

  extend type Mutation {
    createObsLoggingMetric(tenantId: String!, code: String!, name: String!): ObsLoggingMetric!
    deleteObsLoggingMetric(id: ID!): Boolean!
  }
`;

export const ObsLoggingMetricGqlResolvers = {
  Query: {
    getObsLoggingMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
