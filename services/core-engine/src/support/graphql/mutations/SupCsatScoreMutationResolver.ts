export const SupCsatScoreMutationTypeDefs = `
  input CreateSupCsatScoreInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSupCsatScore(input: CreateSupCsatScoreInput!): SupCsatScore!
    deleteSupCsatScore(id: ID!): Boolean!
  }
`;

export const SupCsatScoreMutationResolvers = {
  Mutation: {
    createSupCsatScore: async (_: any, args: { input: any }) => {
      return {
        id: "sup_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSupCsatScore: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
