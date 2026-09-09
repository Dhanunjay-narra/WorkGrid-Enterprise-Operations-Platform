export const IotAnomalyAlertMutationTypeDefs = `
  input CreateIotAnomalyAlertInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotAnomalyAlert(input: CreateIotAnomalyAlertInput!): IotAnomalyAlert!
    deleteIotAnomalyAlert(id: ID!): Boolean!
  }
`;

export const IotAnomalyAlertMutationResolvers = {
  Mutation: {
    createIotAnomalyAlert: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotAnomalyAlert: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
