export const SupportKnowledgeMetricGqlTypeDefs = `
  type SupportKnowledgeMetric {
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
    getSupportKnowledgeMetric(id: ID!): SupportKnowledgeMetric
    listSupportKnowledgeMetrics(tenantId: String!, limit: Int): [SupportKnowledgeMetric!]!
  }

  extend type Mutation {
    createSupportKnowledgeMetric(tenantId: String!, code: String!, name: String!): SupportKnowledgeMetric!
    deleteSupportKnowledgeMetric(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeMetricGqlResolvers = {
  Query: {
    getSupportKnowledgeMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
