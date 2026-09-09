export const CommBroadcastAnnouncementMutationTypeDefs = `
  input CreateCommBroadcastAnnouncementInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommBroadcastAnnouncement(input: CreateCommBroadcastAnnouncementInput!): CommBroadcastAnnouncement!
    deleteCommBroadcastAnnouncement(id: ID!): Boolean!
  }
`;

export const CommBroadcastAnnouncementMutationResolvers = {
  Mutation: {
    createCommBroadcastAnnouncement: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommBroadcastAnnouncement: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
