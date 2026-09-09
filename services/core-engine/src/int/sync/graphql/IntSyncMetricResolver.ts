export const IntSyncMetricGqlTypeDefs = `
  type IntSyncMetric {
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
    getIntSyncMetric(id: ID!): IntSyncMetric
    listIntSyncMetrics(tenantId: String!, limit: Int): [IntSyncMetric!]!
  }

  extend type Mutation {
    createIntSyncMetric(tenantId: String!, code: String!, name: String!): IntSyncMetric!
    deleteIntSyncMetric(id: ID!): Boolean!
  }
`;

export const IntSyncMetricGqlResolvers = {
  Query: {
    getIntSyncMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
