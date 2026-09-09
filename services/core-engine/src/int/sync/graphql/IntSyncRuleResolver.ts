export const IntSyncRuleGqlTypeDefs = `
  type IntSyncRule {
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
    getIntSyncRule(id: ID!): IntSyncRule
    listIntSyncRules(tenantId: String!, limit: Int): [IntSyncRule!]!
  }

  extend type Mutation {
    createIntSyncRule(tenantId: String!, code: String!, name: String!): IntSyncRule!
    deleteIntSyncRule(id: ID!): Boolean!
  }
`;

export const IntSyncRuleGqlResolvers = {
  Query: {
    getIntSyncRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
