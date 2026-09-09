export const BiCohortsRuleGqlTypeDefs = `
  type BiCohortsRule {
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
    getBiCohortsRule(id: ID!): BiCohortsRule
    listBiCohortsRules(tenantId: String!, limit: Int): [BiCohortsRule!]!
  }

  extend type Mutation {
    createBiCohortsRule(tenantId: String!, code: String!, name: String!): BiCohortsRule!
    deleteBiCohortsRule(id: ID!): Boolean!
  }
`;

export const BiCohortsRuleGqlResolvers = {
  Query: {
    getBiCohortsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
