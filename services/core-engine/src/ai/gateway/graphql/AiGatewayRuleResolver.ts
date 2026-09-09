export const AiGatewayRuleGqlTypeDefs = `
  type AiGatewayRule {
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
    getAiGatewayRule(id: ID!): AiGatewayRule
    listAiGatewayRules(tenantId: String!, limit: Int): [AiGatewayRule!]!
  }

  extend type Mutation {
    createAiGatewayRule(tenantId: String!, code: String!, name: String!): AiGatewayRule!
    deleteAiGatewayRule(id: ID!): Boolean!
  }
`;

export const AiGatewayRuleGqlResolvers = {
  Query: {
    getAiGatewayRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
