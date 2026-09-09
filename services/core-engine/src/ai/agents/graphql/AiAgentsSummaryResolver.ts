export const AiAgentsSummaryGqlTypeDefs = `
  type AiAgentsSummary {
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
    getAiAgentsSummary(id: ID!): AiAgentsSummary
    listAiAgentsSummarys(tenantId: String!, limit: Int): [AiAgentsSummary!]!
  }

  extend type Mutation {
    createAiAgentsSummary(tenantId: String!, code: String!, name: String!): AiAgentsSummary!
    deleteAiAgentsSummary(id: ID!): Boolean!
  }
`;

export const AiAgentsSummaryGqlResolvers = {
  Query: {
    getAiAgentsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
