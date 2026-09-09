export const BiReportScheduleMutationTypeDefs = `
  input CreateBiReportScheduleInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiReportSchedule(input: CreateBiReportScheduleInput!): BiReportSchedule!
    deleteBiReportSchedule(id: ID!): Boolean!
  }
`;

export const BiReportScheduleMutationResolvers = {
  Mutation: {
    createBiReportSchedule: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiReportSchedule: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
