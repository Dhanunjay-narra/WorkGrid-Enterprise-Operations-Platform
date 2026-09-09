export const AiAgentsRuleGqlTypeDefs = `
  type AiAgentsRule {
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
    getAiAgentsRule(id: ID!): AiAgentsRule
    listAiAgentsRules(tenantId: String!, limit: Int): [AiAgentsRule!]!
  }

  extend type Mutation {
    createAiAgentsRule(tenantId: String!, code: String!, name: String!): AiAgentsRule!
    deleteAiAgentsRule(id: ID!): Boolean!
  }
`;

export const AiAgentsRuleGqlResolvers = {
  Query: {
    getAiAgentsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
