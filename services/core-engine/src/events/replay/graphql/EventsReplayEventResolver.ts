export const EventsReplayEventGqlTypeDefs = `
  type EventsReplayEvent {
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
    getEventsReplayEvent(id: ID!): EventsReplayEvent
    listEventsReplayEvents(tenantId: String!, limit: Int): [EventsReplayEvent!]!
  }

  extend type Mutation {
    createEventsReplayEvent(tenantId: String!, code: String!, name: String!): EventsReplayEvent!
    deleteEventsReplayEvent(id: ID!): Boolean!
  }
`;

export const EventsReplayEventGqlResolvers = {
  Query: {
    getEventsReplayEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
