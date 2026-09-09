export const ObsLoggingRuleGqlTypeDefs = `
  type ObsLoggingRule {
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
    getObsLoggingRule(id: ID!): ObsLoggingRule
    listObsLoggingRules(tenantId: String!, limit: Int): [ObsLoggingRule!]!
  }

  extend type Mutation {
    createObsLoggingRule(tenantId: String!, code: String!, name: String!): ObsLoggingRule!
    deleteObsLoggingRule(id: ID!): Boolean!
  }
`;

export const ObsLoggingRuleGqlResolvers = {
  Query: {
    getObsLoggingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
