export const PrjProjectHealthMetricMutationTypeDefs = `
  input CreatePrjProjectHealthMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjProjectHealthMetric(input: CreatePrjProjectHealthMetricInput!): PrjProjectHealthMetric!
    deletePrjProjectHealthMetric(id: ID!): Boolean!
  }
`;

export const PrjProjectHealthMetricMutationResolvers = {
  Mutation: {
    createPrjProjectHealthMetric: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjProjectHealthMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
