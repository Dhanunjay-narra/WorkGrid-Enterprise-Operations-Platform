export const EventsIdempotencyEventGqlTypeDefs = `
  type EventsIdempotencyEvent {
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
    getEventsIdempotencyEvent(id: ID!): EventsIdempotencyEvent
    listEventsIdempotencyEvents(tenantId: String!, limit: Int): [EventsIdempotencyEvent!]!
  }

  extend type Mutation {
    createEventsIdempotencyEvent(tenantId: String!, code: String!, name: String!): EventsIdempotencyEvent!
    deleteEventsIdempotencyEvent(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyEventGqlResolvers = {
  Query: {
    getEventsIdempotencyEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
