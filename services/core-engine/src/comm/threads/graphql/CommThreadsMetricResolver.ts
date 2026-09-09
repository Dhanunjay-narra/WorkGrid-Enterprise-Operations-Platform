export const CommThreadsMetricGqlTypeDefs = `
  type CommThreadsMetric {
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
    getCommThreadsMetric(id: ID!): CommThreadsMetric
    listCommThreadsMetrics(tenantId: String!, limit: Int): [CommThreadsMetric!]!
  }

  extend type Mutation {
    createCommThreadsMetric(tenantId: String!, code: String!, name: String!): CommThreadsMetric!
    deleteCommThreadsMetric(id: ID!): Boolean!
  }
`;

export const CommThreadsMetricGqlResolvers = {
  Query: {
    getCommThreadsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
