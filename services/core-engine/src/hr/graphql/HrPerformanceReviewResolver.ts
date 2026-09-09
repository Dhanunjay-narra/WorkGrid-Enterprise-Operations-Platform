export const HrPerformanceReviewTypeDefs = `
  type HrPerformanceReview {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrPerformanceReview(id: ID!): HrPerformanceReview
    listHrPerformanceReviews(tenantId: String!): [HrPerformanceReview!]!
  }
`;

export const HrPerformanceReviewResolvers = {
  Query: {
    getHrPerformanceReview: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrPerformanceReview", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrPerformanceReviews: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrPerformanceReview", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
