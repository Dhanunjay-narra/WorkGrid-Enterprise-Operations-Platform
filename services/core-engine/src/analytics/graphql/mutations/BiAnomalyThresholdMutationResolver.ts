export const BiAnomalyThresholdMutationTypeDefs = `
  input CreateBiAnomalyThresholdInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiAnomalyThreshold(input: CreateBiAnomalyThresholdInput!): BiAnomalyThreshold!
    deleteBiAnomalyThreshold(id: ID!): Boolean!
  }
`;

export const BiAnomalyThresholdMutationResolvers = {
  Mutation: {
    createBiAnomalyThreshold: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiAnomalyThreshold: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
