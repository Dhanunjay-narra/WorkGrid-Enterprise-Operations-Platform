export const IntWebhooksMetricGqlTypeDefs = `
  type IntWebhooksMetric {
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
    getIntWebhooksMetric(id: ID!): IntWebhooksMetric
    listIntWebhooksMetrics(tenantId: String!, limit: Int): [IntWebhooksMetric!]!
  }

  extend type Mutation {
    createIntWebhooksMetric(tenantId: String!, code: String!, name: String!): IntWebhooksMetric!
    deleteIntWebhooksMetric(id: ID!): Boolean!
  }
`;

export const IntWebhooksMetricGqlResolvers = {
  Query: {
    getIntWebhooksMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
