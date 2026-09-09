export const IotThresholdAlertRuleTypeDefs = `
  type IotThresholdAlertRule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIotThresholdAlertRule(id: ID!): IotThresholdAlertRule
    listIotThresholdAlertRules(tenantId: String!): [IotThresholdAlertRule!]!
  }
`;

export const IotThresholdAlertRuleResolvers = {
  Query: {
    getIotThresholdAlertRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IotThresholdAlertRule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIotThresholdAlertRules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IotThresholdAlertRule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
