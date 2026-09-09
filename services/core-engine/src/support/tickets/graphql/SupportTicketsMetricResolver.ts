export const SupportTicketsMetricGqlTypeDefs = `
  type SupportTicketsMetric {
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
    getSupportTicketsMetric(id: ID!): SupportTicketsMetric
    listSupportTicketsMetrics(tenantId: String!, limit: Int): [SupportTicketsMetric!]!
  }

  extend type Mutation {
    createSupportTicketsMetric(tenantId: String!, code: String!, name: String!): SupportTicketsMetric!
    deleteSupportTicketsMetric(id: ID!): Boolean!
  }
`;

export const SupportTicketsMetricGqlResolvers = {
  Query: {
    getSupportTicketsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
