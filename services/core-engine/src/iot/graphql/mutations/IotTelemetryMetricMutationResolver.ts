export const IotTelemetryMetricMutationTypeDefs = `
  input CreateIotTelemetryMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIotTelemetryMetric(input: CreateIotTelemetryMetricInput!): IotTelemetryMetric!
    deleteIotTelemetryMetric(id: ID!): Boolean!
  }
`;

export const IotTelemetryMetricMutationResolvers = {
  Mutation: {
    createIotTelemetryMetric: async (_: any, args: { input: any }) => {
      return {
        id: "iot_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIotTelemetryMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
