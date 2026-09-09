export const HrDepartmentMutationTypeDefs = `
  input CreateHrDepartmentInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrDepartment(input: CreateHrDepartmentInput!): HrDepartment!
    deleteHrDepartment(id: ID!): Boolean!
  }
`;

export const HrDepartmentMutationResolvers = {
  Mutation: {
    createHrDepartment: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrDepartment: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
