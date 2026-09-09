export const HrOkrGoalMutationTypeDefs = `
  input CreateHrOkrGoalInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrOkrGoal(input: CreateHrOkrGoalInput!): HrOkrGoal!
    deleteHrOkrGoal(id: ID!): Boolean!
  }
`;

export const HrOkrGoalMutationResolvers = {
  Mutation: {
    createHrOkrGoal: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrOkrGoal: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
