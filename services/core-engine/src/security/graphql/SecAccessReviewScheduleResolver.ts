export const SecAccessReviewScheduleTypeDefs = `
  type SecAccessReviewSchedule {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecAccessReviewSchedule(id: ID!): SecAccessReviewSchedule
    listSecAccessReviewSchedules(tenantId: String!): [SecAccessReviewSchedule!]!
  }
`;

export const SecAccessReviewScheduleResolvers = {
  Query: {
    getSecAccessReviewSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecAccessReviewSchedule", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecAccessReviewSchedules: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecAccessReviewSchedule", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
