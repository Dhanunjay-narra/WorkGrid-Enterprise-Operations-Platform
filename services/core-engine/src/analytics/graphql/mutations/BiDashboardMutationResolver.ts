export const BiDashboardMutationTypeDefs = `
  input CreateBiDashboardInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiDashboard(input: CreateBiDashboardInput!): BiDashboard!
    deleteBiDashboard(id: ID!): Boolean!
  }
`;

export const BiDashboardMutationResolvers = {
  Mutation: {
    createBiDashboard: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiDashboard: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
