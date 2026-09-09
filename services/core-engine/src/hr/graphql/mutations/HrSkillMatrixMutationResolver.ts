export const HrSkillMatrixMutationTypeDefs = `
  input CreateHrSkillMatrixInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrSkillMatrix(input: CreateHrSkillMatrixInput!): HrSkillMatrix!
    deleteHrSkillMatrix(id: ID!): Boolean!
  }
`;

export const HrSkillMatrixMutationResolvers = {
  Mutation: {
    createHrSkillMatrix: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrSkillMatrix: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
