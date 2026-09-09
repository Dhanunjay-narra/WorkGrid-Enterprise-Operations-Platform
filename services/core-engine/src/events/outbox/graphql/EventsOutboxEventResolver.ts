export const EventsOutboxEventGqlTypeDefs = `
  type EventsOutboxEvent {
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
    getEventsOutboxEvent(id: ID!): EventsOutboxEvent
    listEventsOutboxEvents(tenantId: String!, limit: Int): [EventsOutboxEvent!]!
  }

  extend type Mutation {
    createEventsOutboxEvent(tenantId: String!, code: String!, name: String!): EventsOutboxEvent!
    deleteEventsOutboxEvent(id: ID!): Boolean!
  }
`;

export const EventsOutboxEventGqlResolvers = {
  Query: {
    getEventsOutboxEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
