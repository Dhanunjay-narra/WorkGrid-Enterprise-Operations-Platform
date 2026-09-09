export const TenancyRuleGqlTypeDefs = `
  type TenancyRule {
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
    getTenancyRule(id: ID!): TenancyRule
    listTenancyRules(tenantId: String!, limit: Int): [TenancyRule!]!
  }

  extend type Mutation {
    createTenancyRule(tenantId: String!, code: String!, name: String!): TenancyRule!
    deleteTenancyRule(id: ID!): Boolean!
  }
`;

export const TenancyRuleGqlResolvers = {
  Query: {
    getTenancyRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
