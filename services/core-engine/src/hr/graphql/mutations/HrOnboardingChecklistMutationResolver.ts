export const HrOnboardingChecklistMutationTypeDefs = `
  input CreateHrOnboardingChecklistInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrOnboardingChecklist(input: CreateHrOnboardingChecklistInput!): HrOnboardingChecklist!
    deleteHrOnboardingChecklist(id: ID!): Boolean!
  }
`;

export const HrOnboardingChecklistMutationResolvers = {
  Mutation: {
    createHrOnboardingChecklist: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrOnboardingChecklist: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
