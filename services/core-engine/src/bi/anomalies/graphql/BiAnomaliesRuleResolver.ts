export const BiAnomaliesRuleGqlTypeDefs = `
  type BiAnomaliesRule {
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
    getBiAnomaliesRule(id: ID!): BiAnomaliesRule
    listBiAnomaliesRules(tenantId: String!, limit: Int): [BiAnomaliesRule!]!
  }

  extend type Mutation {
    createBiAnomaliesRule(tenantId: String!, code: String!, name: String!): BiAnomaliesRule!
    deleteBiAnomaliesRule(id: ID!): Boolean!
  }
`;

export const BiAnomaliesRuleGqlResolvers = {
  Query: {
    getBiAnomaliesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
