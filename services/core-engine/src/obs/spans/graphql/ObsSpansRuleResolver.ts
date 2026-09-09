export const ObsSpansRuleGqlTypeDefs = `
  type ObsSpansRule {
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
    getObsSpansRule(id: ID!): ObsSpansRule
    listObsSpansRules(tenantId: String!, limit: Int): [ObsSpansRule!]!
  }

  extend type Mutation {
    createObsSpansRule(tenantId: String!, code: String!, name: String!): ObsSpansRule!
    deleteObsSpansRule(id: ID!): Boolean!
  }
`;

export const ObsSpansRuleGqlResolvers = {
  Query: {
    getObsSpansRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
