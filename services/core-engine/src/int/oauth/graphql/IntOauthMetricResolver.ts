export const IntOauthMetricGqlTypeDefs = `
  type IntOauthMetric {
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
    getIntOauthMetric(id: ID!): IntOauthMetric
    listIntOauthMetrics(tenantId: String!, limit: Int): [IntOauthMetric!]!
  }

  extend type Mutation {
    createIntOauthMetric(tenantId: String!, code: String!, name: String!): IntOauthMetric!
    deleteIntOauthMetric(id: ID!): Boolean!
  }
`;

export const IntOauthMetricGqlResolvers = {
  Query: {
    getIntOauthMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
