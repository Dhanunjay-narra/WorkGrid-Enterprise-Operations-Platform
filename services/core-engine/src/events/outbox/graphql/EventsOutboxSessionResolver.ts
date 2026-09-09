export const EventsOutboxSessionGqlTypeDefs = `
  type EventsOutboxSession {
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
    getEventsOutboxSession(id: ID!): EventsOutboxSession
    listEventsOutboxSessions(tenantId: String!, limit: Int): [EventsOutboxSession!]!
  }

  extend type Mutation {
    createEventsOutboxSession(tenantId: String!, code: String!, name: String!): EventsOutboxSession!
    deleteEventsOutboxSession(id: ID!): Boolean!
  }
`;

export const EventsOutboxSessionGqlResolvers = {
  Query: {
    getEventsOutboxSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
