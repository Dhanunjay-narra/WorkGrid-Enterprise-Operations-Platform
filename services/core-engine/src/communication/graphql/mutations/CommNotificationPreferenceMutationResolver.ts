export const CommNotificationPreferenceMutationTypeDefs = `
  input CreateCommNotificationPreferenceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCommNotificationPreference(input: CreateCommNotificationPreferenceInput!): CommNotificationPreference!
    deleteCommNotificationPreference(id: ID!): Boolean!
  }
`;

export const CommNotificationPreferenceMutationResolvers = {
  Mutation: {
    createCommNotificationPreference: async (_: any, args: { input: any }) => {
      return {
        id: "com_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCommNotificationPreference: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
