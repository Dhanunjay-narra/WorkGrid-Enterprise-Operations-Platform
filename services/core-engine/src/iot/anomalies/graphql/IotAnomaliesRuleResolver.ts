export const IotAnomaliesRuleGqlTypeDefs = `
  type IotAnomaliesRule {
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
    getIotAnomaliesRule(id: ID!): IotAnomaliesRule
    listIotAnomaliesRules(tenantId: String!, limit: Int): [IotAnomaliesRule!]!
  }

  extend type Mutation {
    createIotAnomaliesRule(tenantId: String!, code: String!, name: String!): IotAnomaliesRule!
    deleteIotAnomaliesRule(id: ID!): Boolean!
  }
`;

export const IotAnomaliesRuleGqlResolvers = {
  Query: {
    getIotAnomaliesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
