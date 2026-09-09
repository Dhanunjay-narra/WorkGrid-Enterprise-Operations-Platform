export const AiGatewaySummaryGqlTypeDefs = `
  type AiGatewaySummary {
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
    getAiGatewaySummary(id: ID!): AiGatewaySummary
    listAiGatewaySummarys(tenantId: String!, limit: Int): [AiGatewaySummary!]!
  }

  extend type Mutation {
    createAiGatewaySummary(tenantId: String!, code: String!, name: String!): AiGatewaySummary!
    deleteAiGatewaySummary(id: ID!): Boolean!
  }
`;

export const AiGatewaySummaryGqlResolvers = {
  Query: {
    getAiGatewaySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewaySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
