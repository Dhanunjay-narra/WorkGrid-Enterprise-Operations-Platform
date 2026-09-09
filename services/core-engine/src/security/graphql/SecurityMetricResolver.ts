export const SecurityMetricGqlTypeDefs = `
  type SecurityMetric {
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
    getSecurityMetric(id: ID!): SecurityMetric
    listSecurityMetrics(tenantId: String!, limit: Int): [SecurityMetric!]!
  }

  extend type Mutation {
    createSecurityMetric(tenantId: String!, code: String!, name: String!): SecurityMetric!
    deleteSecurityMetric(id: ID!): Boolean!
  }
`;

export const SecurityMetricGqlResolvers = {
  Query: {
    getSecurityMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
