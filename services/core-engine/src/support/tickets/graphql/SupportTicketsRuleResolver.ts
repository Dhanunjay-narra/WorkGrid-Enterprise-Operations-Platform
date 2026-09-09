export const SupportTicketsRuleGqlTypeDefs = `
  type SupportTicketsRule {
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
    getSupportTicketsRule(id: ID!): SupportTicketsRule
    listSupportTicketsRules(tenantId: String!, limit: Int): [SupportTicketsRule!]!
  }

  extend type Mutation {
    createSupportTicketsRule(tenantId: String!, code: String!, name: String!): SupportTicketsRule!
    deleteSupportTicketsRule(id: ID!): Boolean!
  }
`;

export const SupportTicketsRuleGqlResolvers = {
  Query: {
    getSupportTicketsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
