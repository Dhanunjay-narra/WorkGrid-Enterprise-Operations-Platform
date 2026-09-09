export const WfCronScheduleMutationTypeDefs = `
  input CreateWfCronScheduleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createWfCronSchedule(input: CreateWfCronScheduleInput!): WfCronSchedule!
    deleteWfCronSchedule(id: ID!): Boolean!
  }
`;

export const WfCronScheduleMutationResolvers = {
  Mutation: {
    createWfCronSchedule: async (_: any, args: { input: any }) => {
      return {
        id: "wor_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteWfCronSchedule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
