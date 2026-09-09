export const EventsReplaySessionGqlTypeDefs = `
  type EventsReplaySession {
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
    getEventsReplaySession(id: ID!): EventsReplaySession
    listEventsReplaySessions(tenantId: String!, limit: Int): [EventsReplaySession!]!
  }

  extend type Mutation {
    createEventsReplaySession(tenantId: String!, code: String!, name: String!): EventsReplaySession!
    deleteEventsReplaySession(id: ID!): Boolean!
  }
`;

export const EventsReplaySessionGqlResolvers = {
  Query: {
    getEventsReplaySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplaySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
