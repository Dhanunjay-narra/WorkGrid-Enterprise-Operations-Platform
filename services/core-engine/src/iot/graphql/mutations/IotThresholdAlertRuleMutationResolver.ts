export const IotThresholdAlertRuleMutationTypeDefs = `
  input CreateIotThresholdAlertRuleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotThresholdAlertRule(input: CreateIotThresholdAlertRuleInput!): IotThresholdAlertRule!
    deleteIotThresholdAlertRule(id: ID!): Boolean!
  }
`;

export const IotThresholdAlertRuleMutationResolvers = {
  Mutation: {
    createIotThresholdAlertRule: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotThresholdAlertRule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
