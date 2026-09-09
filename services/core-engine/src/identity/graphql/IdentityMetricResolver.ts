export const IdentityMetricGqlTypeDefs = `
  type IdentityMetric {
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
    getIdentityMetric(id: ID!): IdentityMetric
    listIdentityMetrics(tenantId: String!, limit: Int): [IdentityMetric!]!
  }

  extend type Mutation {
    createIdentityMetric(tenantId: String!, code: String!, name: String!): IdentityMetric!
    deleteIdentityMetric(id: ID!): Boolean!
  }
`;

export const IdentityMetricGqlResolvers = {
  Query: {
    getIdentityMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
