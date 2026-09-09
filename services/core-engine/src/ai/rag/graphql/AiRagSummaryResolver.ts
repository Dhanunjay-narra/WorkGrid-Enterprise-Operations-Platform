export const AiRagSummaryGqlTypeDefs = `
  type AiRagSummary {
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
    getAiRagSummary(id: ID!): AiRagSummary
    listAiRagSummarys(tenantId: String!, limit: Int): [AiRagSummary!]!
  }

  extend type Mutation {
    createAiRagSummary(tenantId: String!, code: String!, name: String!): AiRagSummary!
    deleteAiRagSummary(id: ID!): Boolean!
  }
`;

export const AiRagSummaryGqlResolvers = {
  Query: {
    getAiRagSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
