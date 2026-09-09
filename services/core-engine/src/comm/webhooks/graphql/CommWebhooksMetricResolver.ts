export const CommWebhooksMetricGqlTypeDefs = `
  type CommWebhooksMetric {
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
    getCommWebhooksMetric(id: ID!): CommWebhooksMetric
    listCommWebhooksMetrics(tenantId: String!, limit: Int): [CommWebhooksMetric!]!
  }

  extend type Mutation {
    createCommWebhooksMetric(tenantId: String!, code: String!, name: String!): CommWebhooksMetric!
    deleteCommWebhooksMetric(id: ID!): Boolean!
  }
`;

export const CommWebhooksMetricGqlResolvers = {
  Query: {
    getCommWebhooksMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
