export const FinRecurringPlanTypeDefs = `
  type FinRecurringPlan {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinRecurringPlan(id: ID!): FinRecurringPlan
    listFinRecurringPlans(tenantId: String!): [FinRecurringPlan!]!
  }
`;

export const FinRecurringPlanResolvers = {
  Query: {
    getFinRecurringPlan: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinRecurringPlan", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinRecurringPlans: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinRecurringPlan", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
