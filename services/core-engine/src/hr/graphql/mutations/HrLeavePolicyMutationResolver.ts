export const HrLeavePolicyMutationTypeDefs = `
  input CreateHrLeavePolicyInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrLeavePolicy(input: CreateHrLeavePolicyInput!): HrLeavePolicy!
    deleteHrLeavePolicy(id: ID!): Boolean!
  }
`;

export const HrLeavePolicyMutationResolvers = {
  Mutation: {
    createHrLeavePolicy: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrLeavePolicy: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
