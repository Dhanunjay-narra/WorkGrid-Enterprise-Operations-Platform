export const ObsTracingRuleGqlTypeDefs = `
  type ObsTracingRule {
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
    getObsTracingRule(id: ID!): ObsTracingRule
    listObsTracingRules(tenantId: String!, limit: Int): [ObsTracingRule!]!
  }

  extend type Mutation {
    createObsTracingRule(tenantId: String!, code: String!, name: String!): ObsTracingRule!
    deleteObsTracingRule(id: ID!): Boolean!
  }
`;

export const ObsTracingRuleGqlResolvers = {
  Query: {
    getObsTracingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
