export const SupportQueuesMetricGqlTypeDefs = `
  type SupportQueuesMetric {
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
    getSupportQueuesMetric(id: ID!): SupportQueuesMetric
    listSupportQueuesMetrics(tenantId: String!, limit: Int): [SupportQueuesMetric!]!
  }

  extend type Mutation {
    createSupportQueuesMetric(tenantId: String!, code: String!, name: String!): SupportQueuesMetric!
    deleteSupportQueuesMetric(id: ID!): Boolean!
  }
`;

export const SupportQueuesMetricGqlResolvers = {
  Query: {
    getSupportQueuesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
