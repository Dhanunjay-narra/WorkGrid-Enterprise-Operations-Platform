export const ObsProbesRuleGqlTypeDefs = `
  type ObsProbesRule {
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
    getObsProbesRule(id: ID!): ObsProbesRule
    listObsProbesRules(tenantId: String!, limit: Int): [ObsProbesRule!]!
  }

  extend type Mutation {
    createObsProbesRule(tenantId: String!, code: String!, name: String!): ObsProbesRule!
    deleteObsProbesRule(id: ID!): Boolean!
  }
`;

export const ObsProbesRuleGqlResolvers = {
  Query: {
    getObsProbesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
