export const ObsSpansMetricGqlTypeDefs = `
  type ObsSpansMetric {
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
    getObsSpansMetric(id: ID!): ObsSpansMetric
    listObsSpansMetrics(tenantId: String!, limit: Int): [ObsSpansMetric!]!
  }

  extend type Mutation {
    createObsSpansMetric(tenantId: String!, code: String!, name: String!): ObsSpansMetric!
    deleteObsSpansMetric(id: ID!): Boolean!
  }
`;

export const ObsSpansMetricGqlResolvers = {
  Query: {
    getObsSpansMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
