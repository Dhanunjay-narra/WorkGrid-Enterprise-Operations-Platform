export const CrmMeetingMutationTypeDefs = `
  input CreateCrmMeetingInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmMeeting(input: CreateCrmMeetingInput!): CrmMeeting!
    deleteCrmMeeting(id: ID!): Boolean!
  }
`;

export const CrmMeetingMutationResolvers = {
  Mutation: {
    createCrmMeeting: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmMeeting: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
