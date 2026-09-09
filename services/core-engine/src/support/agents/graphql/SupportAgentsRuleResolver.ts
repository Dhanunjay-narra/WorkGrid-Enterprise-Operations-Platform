export const SupportAgentsRuleGqlTypeDefs = `
  type SupportAgentsRule {
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
    getSupportAgentsRule(id: ID!): SupportAgentsRule
    listSupportAgentsRules(tenantId: String!, limit: Int): [SupportAgentsRule!]!
  }

  extend type Mutation {
    createSupportAgentsRule(tenantId: String!, code: String!, name: String!): SupportAgentsRule!
    deleteSupportAgentsRule(id: ID!): Boolean!
  }
`;

export const SupportAgentsRuleGqlResolvers = {
  Query: {
    getSupportAgentsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
