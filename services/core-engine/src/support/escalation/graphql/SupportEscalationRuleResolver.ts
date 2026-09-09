export const SupportEscalationRuleGqlTypeDefs = `
  type SupportEscalationRule {
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
    getSupportEscalationRule(id: ID!): SupportEscalationRule
    listSupportEscalationRules(tenantId: String!, limit: Int): [SupportEscalationRule!]!
  }

  extend type Mutation {
    createSupportEscalationRule(tenantId: String!, code: String!, name: String!): SupportEscalationRule!
    deleteSupportEscalationRule(id: ID!): Boolean!
  }
`;

export const SupportEscalationRuleGqlResolvers = {
  Query: {
    getSupportEscalationRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
