export const SupportCsatMetricGqlTypeDefs = `
  type SupportCsatMetric {
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
    getSupportCsatMetric(id: ID!): SupportCsatMetric
    listSupportCsatMetrics(tenantId: String!, limit: Int): [SupportCsatMetric!]!
  }

  extend type Mutation {
    createSupportCsatMetric(tenantId: String!, code: String!, name: String!): SupportCsatMetric!
    deleteSupportCsatMetric(id: ID!): Boolean!
  }
`;

export const SupportCsatMetricGqlResolvers = {
  Query: {
    getSupportCsatMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
