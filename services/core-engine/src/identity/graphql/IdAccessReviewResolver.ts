export const IdAccessReviewTypeDefs = `
  type IdAccessReview {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdAccessReview(id: ID!): IdAccessReview
    listIdAccessReviews(tenantId: String!): [IdAccessReview!]!
  }
`;

export const IdAccessReviewResolvers = {
  Query: {
    getIdAccessReview: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdAccessReview", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdAccessReviews: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdAccessReview", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
