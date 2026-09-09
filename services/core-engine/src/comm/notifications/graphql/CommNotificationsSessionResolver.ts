export const CommNotificationsSessionGqlTypeDefs = `
  type CommNotificationsSession {
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
    getCommNotificationsSession(id: ID!): CommNotificationsSession
    listCommNotificationsSessions(tenantId: String!, limit: Int): [CommNotificationsSession!]!
  }

  extend type Mutation {
    createCommNotificationsSession(tenantId: String!, code: String!, name: String!): CommNotificationsSession!
    deleteCommNotificationsSession(id: ID!): Boolean!
  }
`;

export const CommNotificationsSessionGqlResolvers = {
  Query: {
    getCommNotificationsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
