export const BiKpisRuleGqlTypeDefs = `
  type BiKpisRule {
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
    getBiKpisRule(id: ID!): BiKpisRule
    listBiKpisRules(tenantId: String!, limit: Int): [BiKpisRule!]!
  }

  extend type Mutation {
    createBiKpisRule(tenantId: String!, code: String!, name: String!): BiKpisRule!
    deleteBiKpisRule(id: ID!): Boolean!
  }
`;

export const BiKpisRuleGqlResolvers = {
  Query: {
    getBiKpisRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
