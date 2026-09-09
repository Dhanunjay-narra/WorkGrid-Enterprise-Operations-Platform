export const AiMemorySummaryGqlTypeDefs = `
  type AiMemorySummary {
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
    getAiMemorySummary(id: ID!): AiMemorySummary
    listAiMemorySummarys(tenantId: String!, limit: Int): [AiMemorySummary!]!
  }

  extend type Mutation {
    createAiMemorySummary(tenantId: String!, code: String!, name: String!): AiMemorySummary!
    deleteAiMemorySummary(id: ID!): Boolean!
  }
`;

export const AiMemorySummaryGqlResolvers = {
  Query: {
    getAiMemorySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemorySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
