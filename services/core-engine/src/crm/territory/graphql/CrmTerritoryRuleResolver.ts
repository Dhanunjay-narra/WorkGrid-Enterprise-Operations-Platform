export const CrmTerritoryRuleGqlTypeDefs = `
  type CrmTerritoryRule {
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
    getCrmTerritoryRule(id: ID!): CrmTerritoryRule
    listCrmTerritoryRules(tenantId: String!, limit: Int): [CrmTerritoryRule!]!
  }

  extend type Mutation {
    createCrmTerritoryRule(tenantId: String!, code: String!, name: String!): CrmTerritoryRule!
    deleteCrmTerritoryRule(id: ID!): Boolean!
  }
`;

export const CrmTerritoryRuleGqlResolvers = {
  Query: {
    getCrmTerritoryRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
