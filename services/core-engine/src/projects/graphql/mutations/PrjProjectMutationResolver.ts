export const PrjProjectMutationTypeDefs = `
  input CreatePrjProjectInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createPrjProject(input: CreatePrjProjectInput!): PrjProject!
    deletePrjProject(id: ID!): Boolean!
  }
`;

export const PrjProjectMutationResolvers = {
  Mutation: {
    createPrjProject: async (_: any, args: { input: any }) => {
      return {
        id: "pro_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deletePrjProject: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
