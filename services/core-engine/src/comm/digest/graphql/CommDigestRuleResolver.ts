export const CommDigestRuleGqlTypeDefs = `
  type CommDigestRule {
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
    getCommDigestRule(id: ID!): CommDigestRule
    listCommDigestRules(tenantId: String!, limit: Int): [CommDigestRule!]!
  }

  extend type Mutation {
    createCommDigestRule(tenantId: String!, code: String!, name: String!): CommDigestRule!
    deleteCommDigestRule(id: ID!): Boolean!
  }
`;

export const CommDigestRuleGqlResolvers = {
  Query: {
    getCommDigestRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
