export const AiEmbeddingsRuleGqlTypeDefs = `
  type AiEmbeddingsRule {
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
    getAiEmbeddingsRule(id: ID!): AiEmbeddingsRule
    listAiEmbeddingsRules(tenantId: String!, limit: Int): [AiEmbeddingsRule!]!
  }

  extend type Mutation {
    createAiEmbeddingsRule(tenantId: String!, code: String!, name: String!): AiEmbeddingsRule!
    deleteAiEmbeddingsRule(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsRuleGqlResolvers = {
  Query: {
    getAiEmbeddingsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
