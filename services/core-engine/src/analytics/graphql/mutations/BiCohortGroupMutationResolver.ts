export const BiCohortGroupMutationTypeDefs = `
  input CreateBiCohortGroupInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiCohortGroup(input: CreateBiCohortGroupInput!): BiCohortGroup!
    deleteBiCohortGroup(id: ID!): Boolean!
  }
`;

export const BiCohortGroupMutationResolvers = {
  Mutation: {
    createBiCohortGroup: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiCohortGroup: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
