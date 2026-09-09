export const HrEmployeeMutationTypeDefs = `
  input CreateHrEmployeeInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrEmployee(input: CreateHrEmployeeInput!): HrEmployee!
    deleteHrEmployee(id: ID!): Boolean!
  }
`;

export const HrEmployeeMutationResolvers = {
  Mutation: {
    createHrEmployee: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrEmployee: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
