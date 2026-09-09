export const SupportSlaMetricGqlTypeDefs = `
  type SupportSlaMetric {
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
    getSupportSlaMetric(id: ID!): SupportSlaMetric
    listSupportSlaMetrics(tenantId: String!, limit: Int): [SupportSlaMetric!]!
  }

  extend type Mutation {
    createSupportSlaMetric(tenantId: String!, code: String!, name: String!): SupportSlaMetric!
    deleteSupportSlaMetric(id: ID!): Boolean!
  }
`;

export const SupportSlaMetricGqlResolvers = {
  Query: {
    getSupportSlaMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
