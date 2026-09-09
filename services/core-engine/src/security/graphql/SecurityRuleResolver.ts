export const SecurityRuleGqlTypeDefs = `
  type SecurityRule {
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
    getSecurityRule(id: ID!): SecurityRule
    listSecurityRules(tenantId: String!, limit: Int): [SecurityRule!]!
  }

  extend type Mutation {
    createSecurityRule(tenantId: String!, code: String!, name: String!): SecurityRule!
    deleteSecurityRule(id: ID!): Boolean!
  }
`;

export const SecurityRuleGqlResolvers = {
  Query: {
    getSecurityRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
