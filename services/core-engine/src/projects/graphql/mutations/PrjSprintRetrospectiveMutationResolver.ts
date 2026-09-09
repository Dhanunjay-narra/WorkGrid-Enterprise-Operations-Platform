export const PrjSprintRetrospectiveMutationTypeDefs = `
  input CreatePrjSprintRetrospectiveInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjSprintRetrospective(input: CreatePrjSprintRetrospectiveInput!): PrjSprintRetrospective!
    deletePrjSprintRetrospective(id: ID!): Boolean!
  }
`;

export const PrjSprintRetrospectiveMutationResolvers = {
  Mutation: {
    createPrjSprintRetrospective: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjSprintRetrospective: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
