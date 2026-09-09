export const HrShiftMutationTypeDefs = `
  input CreateHrShiftInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrShift(input: CreateHrShiftInput!): HrShift!
    deleteHrShift(id: ID!): Boolean!
  }
`;

export const HrShiftMutationResolvers = {
  Mutation: {
    createHrShift: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrShift: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
