export const EvtPublishMetricMutationTypeDefs = `
  input CreateEvtPublishMetricInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createEvtPublishMetric(input: CreateEvtPublishMetricInput!): EvtPublishMetric!
    deleteEvtPublishMetric(id: ID!): Boolean!
  }
`;

export const EvtPublishMetricMutationResolvers = {
  Mutation: {
    createEvtPublishMetric: async (_: any, args: { input: any }) => {
      return {
        id: "eve_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteEvtPublishMetric: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
