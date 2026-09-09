export const BiCohortMetricMutationTypeDefs = `
  input CreateBiCohortMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiCohortMetric(input: CreateBiCohortMetricInput!): BiCohortMetric!
    deleteBiCohortMetric(id: ID!): Boolean!
  }
`;

export const BiCohortMetricMutationResolvers = {
  Mutation: {
    createBiCohortMetric: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiCohortMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
