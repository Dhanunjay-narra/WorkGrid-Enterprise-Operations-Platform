export const CrmContactsRuleGqlTypeDefs = `
  type CrmContactsRule {
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
    getCrmContactsRule(id: ID!): CrmContactsRule
    listCrmContactsRules(tenantId: String!, limit: Int): [CrmContactsRule!]!
  }

  extend type Mutation {
    createCrmContactsRule(tenantId: String!, code: String!, name: String!): CrmContactsRule!
    deleteCrmContactsRule(id: ID!): Boolean!
  }
`;

export const CrmContactsRuleGqlResolvers = {
  Query: {
    getCrmContactsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
