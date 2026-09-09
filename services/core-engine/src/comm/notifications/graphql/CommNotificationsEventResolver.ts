export const CommNotificationsEventGqlTypeDefs = `
  type CommNotificationsEvent {
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
    getCommNotificationsEvent(id: ID!): CommNotificationsEvent
    listCommNotificationsEvents(tenantId: String!, limit: Int): [CommNotificationsEvent!]!
  }

  extend type Mutation {
    createCommNotificationsEvent(tenantId: String!, code: String!, name: String!): CommNotificationsEvent!
    deleteCommNotificationsEvent(id: ID!): Boolean!
  }
`;

export const CommNotificationsEventGqlResolvers = {
  Query: {
    getCommNotificationsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
