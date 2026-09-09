export const SupportAgentsMetricGqlTypeDefs = `
  type SupportAgentsMetric {
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
    getSupportAgentsMetric(id: ID!): SupportAgentsMetric
    listSupportAgentsMetrics(tenantId: String!, limit: Int): [SupportAgentsMetric!]!
  }

  extend type Mutation {
    createSupportAgentsMetric(tenantId: String!, code: String!, name: String!): SupportAgentsMetric!
    deleteSupportAgentsMetric(id: ID!): Boolean!
  }
`;

export const SupportAgentsMetricGqlResolvers = {
  Query: {
    getSupportAgentsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
