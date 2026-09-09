export const AiGatewayMetricGqlTypeDefs = `
  type AiGatewayMetric {
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
    getAiGatewayMetric(id: ID!): AiGatewayMetric
    listAiGatewayMetrics(tenantId: String!, limit: Int): [AiGatewayMetric!]!
  }

  extend type Mutation {
    createAiGatewayMetric(tenantId: String!, code: String!, name: String!): AiGatewayMetric!
    deleteAiGatewayMetric(id: ID!): Boolean!
  }
`;

export const AiGatewayMetricGqlResolvers = {
  Query: {
    getAiGatewayMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
