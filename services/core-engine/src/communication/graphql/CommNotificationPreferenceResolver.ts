export const CommNotificationPreferenceTypeDefs = `
  type CommNotificationPreference {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommNotificationPreference(id: ID!): CommNotificationPreference
    listCommNotificationPreferences(tenantId: String!): [CommNotificationPreference!]!
  }
`;

export const CommNotificationPreferenceResolvers = {
  Query: {
    getCommNotificationPreference: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommNotificationPreference", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommNotificationPreferences: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommNotificationPreference", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
