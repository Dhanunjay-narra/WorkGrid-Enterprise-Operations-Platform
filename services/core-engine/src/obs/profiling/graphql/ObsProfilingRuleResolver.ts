export const ObsProfilingRuleGqlTypeDefs = `
  type ObsProfilingRule {
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
    getObsProfilingRule(id: ID!): ObsProfilingRule
    listObsProfilingRules(tenantId: String!, limit: Int): [ObsProfilingRule!]!
  }

  extend type Mutation {
    createObsProfilingRule(tenantId: String!, code: String!, name: String!): ObsProfilingRule!
    deleteObsProfilingRule(id: ID!): Boolean!
  }
`;

export const ObsProfilingRuleGqlResolvers = {
  Query: {
    getObsProfilingRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
