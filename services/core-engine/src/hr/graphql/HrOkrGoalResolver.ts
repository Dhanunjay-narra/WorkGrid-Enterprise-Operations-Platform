export const HrOkrGoalTypeDefs = `
  type HrOkrGoal {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrOkrGoal(id: ID!): HrOkrGoal
    listHrOkrGoals(tenantId: String!): [HrOkrGoal!]!
  }
`;

export const HrOkrGoalResolvers = {
  Query: {
    getHrOkrGoal: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrOkrGoal", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrOkrGoals: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrOkrGoal", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
