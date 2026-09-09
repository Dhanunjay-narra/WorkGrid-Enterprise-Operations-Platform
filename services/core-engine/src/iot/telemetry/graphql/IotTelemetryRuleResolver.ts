export const IotTelemetryRuleGqlTypeDefs = `
  type IotTelemetryRule {
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
    getIotTelemetryRule(id: ID!): IotTelemetryRule
    listIotTelemetryRules(tenantId: String!, limit: Int): [IotTelemetryRule!]!
  }

  extend type Mutation {
    createIotTelemetryRule(tenantId: String!, code: String!, name: String!): IotTelemetryRule!
    deleteIotTelemetryRule(id: ID!): Boolean!
  }
`;

export const IotTelemetryRuleGqlResolvers = {
  Query: {
    getIotTelemetryRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
