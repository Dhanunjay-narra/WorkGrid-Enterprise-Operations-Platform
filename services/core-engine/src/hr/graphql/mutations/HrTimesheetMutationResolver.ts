export const HrTimesheetMutationTypeDefs = `
  input CreateHrTimesheetInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrTimesheet(input: CreateHrTimesheetInput!): HrTimesheet!
    deleteHrTimesheet(id: ID!): Boolean!
  }
`;

export const HrTimesheetMutationResolvers = {
  Mutation: {
    createHrTimesheet: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrTimesheet: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
