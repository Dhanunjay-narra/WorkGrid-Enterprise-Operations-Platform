export const ObsAlertsRuleGqlTypeDefs = `
  type ObsAlertsRule {
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
    getObsAlertsRule(id: ID!): ObsAlertsRule
    listObsAlertsRules(tenantId: String!, limit: Int): [ObsAlertsRule!]!
  }

  extend type Mutation {
    createObsAlertsRule(tenantId: String!, code: String!, name: String!): ObsAlertsRule!
    deleteObsAlertsRule(id: ID!): Boolean!
  }
`;

export const ObsAlertsRuleGqlResolvers = {
  Query: {
    getObsAlertsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
