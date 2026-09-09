export const BiExportsRuleGqlTypeDefs = `
  type BiExportsRule {
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
    getBiExportsRule(id: ID!): BiExportsRule
    listBiExportsRules(tenantId: String!, limit: Int): [BiExportsRule!]!
  }

  extend type Mutation {
    createBiExportsRule(tenantId: String!, code: String!, name: String!): BiExportsRule!
    deleteBiExportsRule(id: ID!): Boolean!
  }
`;

export const BiExportsRuleGqlResolvers = {
  Query: {
    getBiExportsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiExportsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
