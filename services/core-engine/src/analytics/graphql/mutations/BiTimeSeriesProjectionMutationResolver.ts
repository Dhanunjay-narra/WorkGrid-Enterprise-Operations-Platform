export const BiTimeSeriesProjectionMutationTypeDefs = `
  input CreateBiTimeSeriesProjectionInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiTimeSeriesProjection(input: CreateBiTimeSeriesProjectionInput!): BiTimeSeriesProjection!
    deleteBiTimeSeriesProjection(id: ID!): Boolean!
  }
`;

export const BiTimeSeriesProjectionMutationResolvers = {
  Mutation: {
    createBiTimeSeriesProjection: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiTimeSeriesProjection: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
