export const IntStripeMetricGqlTypeDefs = `
  type IntStripeMetric {
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
    getIntStripeMetric(id: ID!): IntStripeMetric
    listIntStripeMetrics(tenantId: String!, limit: Int): [IntStripeMetric!]!
  }

  extend type Mutation {
    createIntStripeMetric(tenantId: String!, code: String!, name: String!): IntStripeMetric!
    deleteIntStripeMetric(id: ID!): Boolean!
  }
`;

export const IntStripeMetricGqlResolvers = {
  Query: {
    getIntStripeMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
