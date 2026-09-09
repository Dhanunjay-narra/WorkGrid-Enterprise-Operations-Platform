export const CrmDealsRuleGqlTypeDefs = `
  type CrmDealsRule {
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
    getCrmDealsRule(id: ID!): CrmDealsRule
    listCrmDealsRules(tenantId: String!, limit: Int): [CrmDealsRule!]!
  }

  extend type Mutation {
    createCrmDealsRule(tenantId: String!, code: String!, name: String!): CrmDealsRule!
    deleteCrmDealsRule(id: ID!): Boolean!
  }
`;

export const CrmDealsRuleGqlResolvers = {
  Query: {
    getCrmDealsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
