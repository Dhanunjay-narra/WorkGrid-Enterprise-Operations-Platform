export const PrjSprintMutationTypeDefs = `
  input CreatePrjSprintInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjSprint(input: CreatePrjSprintInput!): PrjSprint!
    deletePrjSprint(id: ID!): Boolean!
  }
`;

export const PrjSprintMutationResolvers = {
  Mutation: {
    createPrjSprint: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjSprint: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
