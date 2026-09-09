export const CrmLeadsRuleGqlTypeDefs = `
  type CrmLeadsRule {
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
    getCrmLeadsRule(id: ID!): CrmLeadsRule
    listCrmLeadsRules(tenantId: String!, limit: Int): [CrmLeadsRule!]!
  }

  extend type Mutation {
    createCrmLeadsRule(tenantId: String!, code: String!, name: String!): CrmLeadsRule!
    deleteCrmLeadsRule(id: ID!): Boolean!
  }
`;

export const CrmLeadsRuleGqlResolvers = {
  Query: {
    getCrmLeadsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
