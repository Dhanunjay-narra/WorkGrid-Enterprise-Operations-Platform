export const TenancyMetricGqlTypeDefs = `
  type TenancyMetric {
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
    getTenancyMetric(id: ID!): TenancyMetric
    listTenancyMetrics(tenantId: String!, limit: Int): [TenancyMetric!]!
  }

  extend type Mutation {
    createTenancyMetric(tenantId: String!, code: String!, name: String!): TenancyMetric!
    deleteTenancyMetric(id: ID!): Boolean!
  }
`;

export const TenancyMetricGqlResolvers = {
  Query: {
    getTenancyMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
