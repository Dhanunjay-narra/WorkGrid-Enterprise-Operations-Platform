export const CommNotificationsProfileGqlTypeDefs = `
  type CommNotificationsProfile {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getCommNotificationsProfile(id: ID!): CommNotificationsProfile
    listCommNotificationsProfiles(tenantId: String!, limit: Int): [CommNotificationsProfile!]!
  }

  extend type Mutation {
    createCommNotificationsProfile(tenantId: String!, code: String!, name: String!): CommNotificationsProfile!
    deleteCommNotificationsProfile(id: ID!): Boolean!
  }
`;

export const CommNotificationsProfileGqlResolvers = {
  Query: {
    getCommNotificationsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
