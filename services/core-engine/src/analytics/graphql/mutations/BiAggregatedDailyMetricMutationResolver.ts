export const BiAggregatedDailyMetricMutationTypeDefs = `
  input CreateBiAggregatedDailyMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiAggregatedDailyMetric(input: CreateBiAggregatedDailyMetricInput!): BiAggregatedDailyMetric!
    deleteBiAggregatedDailyMetric(id: ID!): Boolean!
  }
`;

export const BiAggregatedDailyMetricMutationResolvers = {
  Mutation: {
    createBiAggregatedDailyMetric: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiAggregatedDailyMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
