export const AiPromptsSummaryGqlTypeDefs = `
  type AiPromptsSummary {
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
    getAiPromptsSummary(id: ID!): AiPromptsSummary
    listAiPromptsSummarys(tenantId: String!, limit: Int): [AiPromptsSummary!]!
  }

  extend type Mutation {
    createAiPromptsSummary(tenantId: String!, code: String!, name: String!): AiPromptsSummary!
    deleteAiPromptsSummary(id: ID!): Boolean!
  }
`;

export const AiPromptsSummaryGqlResolvers = {
  Query: {
    getAiPromptsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
