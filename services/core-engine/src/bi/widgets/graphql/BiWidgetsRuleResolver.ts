export const BiWidgetsRuleGqlTypeDefs = `
  type BiWidgetsRule {
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
    getBiWidgetsRule(id: ID!): BiWidgetsRule
    listBiWidgetsRules(tenantId: String!, limit: Int): [BiWidgetsRule!]!
  }

  extend type Mutation {
    createBiWidgetsRule(tenantId: String!, code: String!, name: String!): BiWidgetsRule!
    deleteBiWidgetsRule(id: ID!): Boolean!
  }
`;

export const BiWidgetsRuleGqlResolvers = {
  Query: {
    getBiWidgetsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
