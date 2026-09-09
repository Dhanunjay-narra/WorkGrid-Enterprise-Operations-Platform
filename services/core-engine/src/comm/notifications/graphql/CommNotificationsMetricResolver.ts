export const CommNotificationsMetricGqlTypeDefs = `
  type CommNotificationsMetric {
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
    getCommNotificationsMetric(id: ID!): CommNotificationsMetric
    listCommNotificationsMetrics(tenantId: String!, limit: Int): [CommNotificationsMetric!]!
  }

  extend type Mutation {
    createCommNotificationsMetric(tenantId: String!, code: String!, name: String!): CommNotificationsMetric!
    deleteCommNotificationsMetric(id: ID!): Boolean!
  }
`;

export const CommNotificationsMetricGqlResolvers = {
  Query: {
    getCommNotificationsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
