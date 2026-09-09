export const HrJobPostingMutationTypeDefs = `
  input CreateHrJobPostingInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrJobPosting(input: CreateHrJobPostingInput!): HrJobPosting!
    deleteHrJobPosting(id: ID!): Boolean!
  }
`;

export const HrJobPostingMutationResolvers = {
  Mutation: {
    createHrJobPosting: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrJobPosting: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
