export const EventsDeadletterSessionGqlTypeDefs = `
  type EventsDeadletterSession {
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
    getEventsDeadletterSession(id: ID!): EventsDeadletterSession
    listEventsDeadletterSessions(tenantId: String!, limit: Int): [EventsDeadletterSession!]!
  }

  extend type Mutation {
    createEventsDeadletterSession(tenantId: String!, code: String!, name: String!): EventsDeadletterSession!
    deleteEventsDeadletterSession(id: ID!): Boolean!
  }
`;

export const EventsDeadletterSessionGqlResolvers = {
  Query: {
    getEventsDeadletterSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
