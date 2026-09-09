export const AiToolsSummaryGqlTypeDefs = `
  type AiToolsSummary {
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
    getAiToolsSummary(id: ID!): AiToolsSummary
    listAiToolsSummarys(tenantId: String!, limit: Int): [AiToolsSummary!]!
  }

  extend type Mutation {
    createAiToolsSummary(tenantId: String!, code: String!, name: String!): AiToolsSummary!
    deleteAiToolsSummary(id: ID!): Boolean!
  }
`;

export const AiToolsSummaryGqlResolvers = {
  Query: {
    getAiToolsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
