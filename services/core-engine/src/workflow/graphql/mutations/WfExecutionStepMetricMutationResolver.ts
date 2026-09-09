export const WfExecutionStepMetricMutationTypeDefs = `
  input CreateWfExecutionStepMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfExecutionStepMetric(input: CreateWfExecutionStepMetricInput!): WfExecutionStepMetric!
    deleteWfExecutionStepMetric(id: ID!): Boolean!
  }
`;

export const WfExecutionStepMetricMutationResolvers = {
  Mutation: {
    createWfExecutionStepMetric: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfExecutionStepMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
