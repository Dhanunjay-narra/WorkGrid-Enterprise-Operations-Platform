export const HrPayrollSlipMutationTypeDefs = `
  input CreateHrPayrollSlipInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrPayrollSlip(input: CreateHrPayrollSlipInput!): HrPayrollSlip!
    deleteHrPayrollSlip(id: ID!): Boolean!
  }
`;

export const HrPayrollSlipMutationResolvers = {
  Mutation: {
    createHrPayrollSlip: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrPayrollSlip: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
