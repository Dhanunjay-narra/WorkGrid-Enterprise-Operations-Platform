export const HrCandidateMutationTypeDefs = `
  input CreateHrCandidateInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createHrCandidate(input: CreateHrCandidateInput!): HrCandidate!
    deleteHrCandidate(id: ID!): Boolean!
  }
`;

export const HrCandidateMutationResolvers = {
  Mutation: {
    createHrCandidate: async (_: any, args: { input: any }) => {
      return {
        id: "hr_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteHrCandidate: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
