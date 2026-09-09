export const HrPerformanceReviewMutationTypeDefs = `
  input CreateHrPerformanceReviewInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrPerformanceReview(input: CreateHrPerformanceReviewInput!): HrPerformanceReview!
    deleteHrPerformanceReview(id: ID!): Boolean!
  }
`;

export const HrPerformanceReviewMutationResolvers = {
  Mutation: {
    createHrPerformanceReview: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrPerformanceReview: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
