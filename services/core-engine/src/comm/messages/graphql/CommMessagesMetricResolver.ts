export const CommMessagesMetricGqlTypeDefs = `
  type CommMessagesMetric {
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
    getCommMessagesMetric(id: ID!): CommMessagesMetric
    listCommMessagesMetrics(tenantId: String!, limit: Int): [CommMessagesMetric!]!
  }

  extend type Mutation {
    createCommMessagesMetric(tenantId: String!, code: String!, name: String!): CommMessagesMetric!
    deleteCommMessagesMetric(id: ID!): Boolean!
  }
`;

export const CommMessagesMetricGqlResolvers = {
  Query: {
    getCommMessagesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
