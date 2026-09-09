export const HrLeaveRequestMutationTypeDefs = `
  input CreateHrLeaveRequestInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrLeaveRequest(input: CreateHrLeaveRequestInput!): HrLeaveRequest!
    deleteHrLeaveRequest(id: ID!): Boolean!
  }
`;

export const HrLeaveRequestMutationResolvers = {
  Mutation: {
    createHrLeaveRequest: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrLeaveRequest: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
