export const BiKpiMetricMutationTypeDefs = `
  input CreateBiKpiMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiKpiMetric(input: CreateBiKpiMetricInput!): BiKpiMetric!
    deleteBiKpiMetric(id: ID!): Boolean!
  }
`;

export const BiKpiMetricMutationResolvers = {
  Mutation: {
    createBiKpiMetric: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiKpiMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
