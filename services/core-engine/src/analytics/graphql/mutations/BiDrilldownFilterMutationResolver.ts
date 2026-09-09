export const BiDrilldownFilterMutationTypeDefs = `
  input CreateBiDrilldownFilterInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiDrilldownFilter(input: CreateBiDrilldownFilterInput!): BiDrilldownFilter!
    deleteBiDrilldownFilter(id: ID!): Boolean!
  }
`;

export const BiDrilldownFilterMutationResolvers = {
  Mutation: {
    createBiDrilldownFilter: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiDrilldownFilter: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
