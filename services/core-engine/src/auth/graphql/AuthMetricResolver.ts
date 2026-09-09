export const AuthMetricGqlTypeDefs = `
  type AuthMetric {
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
    getAuthMetric(id: ID!): AuthMetric
    listAuthMetrics(tenantId: String!, limit: Int): [AuthMetric!]!
  }

  extend type Mutation {
    createAuthMetric(tenantId: String!, code: String!, name: String!): AuthMetric!
    deleteAuthMetric(id: ID!): Boolean!
  }
`;

export const AuthMetricGqlResolvers = {
  Query: {
    getAuthMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
