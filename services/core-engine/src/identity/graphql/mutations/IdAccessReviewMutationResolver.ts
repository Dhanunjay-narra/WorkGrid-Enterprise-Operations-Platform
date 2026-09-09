export const IdAccessReviewMutationTypeDefs = `
  input CreateIdAccessReviewInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createIdAccessReview(input: CreateIdAccessReviewInput!): IdAccessReview!
    deleteIdAccessReview(id: ID!): Boolean!
  }
`;

export const IdAccessReviewMutationResolvers = {
  Mutation: {
    createIdAccessReview: async (_: any, args: { input: any }) => {
      return {
        id: "ide_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteIdAccessReview: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
