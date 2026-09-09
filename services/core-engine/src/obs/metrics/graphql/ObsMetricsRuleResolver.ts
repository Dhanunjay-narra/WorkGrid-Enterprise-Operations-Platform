export const ObsMetricsRuleGqlTypeDefs = `
  type ObsMetricsRule {
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
    getObsMetricsRule(id: ID!): ObsMetricsRule
    listObsMetricsRules(tenantId: String!, limit: Int): [ObsMetricsRule!]!
  }

  extend type Mutation {
    createObsMetricsRule(tenantId: String!, code: String!, name: String!): ObsMetricsRule!
    deleteObsMetricsRule(id: ID!): Boolean!
  }
`;

export const ObsMetricsRuleGqlResolvers = {
  Query: {
    getObsMetricsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
