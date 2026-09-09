export const AuditRuleGqlTypeDefs = `
  type AuditRule {
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
    getAuditRule(id: ID!): AuditRule
    listAuditRules(tenantId: String!, limit: Int): [AuditRule!]!
  }

  extend type Mutation {
    createAuditRule(tenantId: String!, code: String!, name: String!): AuditRule!
    deleteAuditRule(id: ID!): Boolean!
  }
`;

export const AuditRuleGqlResolvers = {
  Query: {
    getAuditRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
