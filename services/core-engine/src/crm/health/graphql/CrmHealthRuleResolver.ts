export const CrmHealthRuleGqlTypeDefs = `
  type CrmHealthRule {
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
    getCrmHealthRule(id: ID!): CrmHealthRule
    listCrmHealthRules(tenantId: String!, limit: Int): [CrmHealthRule!]!
  }

  extend type Mutation {
    createCrmHealthRule(tenantId: String!, code: String!, name: String!): CrmHealthRule!
    deleteCrmHealthRule(id: ID!): Boolean!
  }
`;

export const CrmHealthRuleGqlResolvers = {
  Query: {
    getCrmHealthRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmHealthRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
