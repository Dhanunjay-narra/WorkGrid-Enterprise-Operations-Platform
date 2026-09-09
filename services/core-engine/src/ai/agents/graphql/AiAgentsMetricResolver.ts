export const AiAgentsMetricGqlTypeDefs = `
  type AiAgentsMetric {
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
    getAiAgentsMetric(id: ID!): AiAgentsMetric
    listAiAgentsMetrics(tenantId: String!, limit: Int): [AiAgentsMetric!]!
  }

  extend type Mutation {
    createAiAgentsMetric(tenantId: String!, code: String!, name: String!): AiAgentsMetric!
    deleteAiAgentsMetric(id: ID!): Boolean!
  }
`;

export const AiAgentsMetricGqlResolvers = {
  Query: {
    getAiAgentsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
