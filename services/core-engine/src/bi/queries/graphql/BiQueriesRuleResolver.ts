export const BiQueriesRuleGqlTypeDefs = `
  type BiQueriesRule {
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
    getBiQueriesRule(id: ID!): BiQueriesRule
    listBiQueriesRules(tenantId: String!, limit: Int): [BiQueriesRule!]!
  }

  extend type Mutation {
    createBiQueriesRule(tenantId: String!, code: String!, name: String!): BiQueriesRule!
    deleteBiQueriesRule(id: ID!): Boolean!
  }
`;

export const BiQueriesRuleGqlResolvers = {
  Query: {
    getBiQueriesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
