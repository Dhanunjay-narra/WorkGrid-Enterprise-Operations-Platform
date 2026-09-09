export const EventsConsumersEventGqlTypeDefs = `
  type EventsConsumersEvent {
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
    getEventsConsumersEvent(id: ID!): EventsConsumersEvent
    listEventsConsumersEvents(tenantId: String!, limit: Int): [EventsConsumersEvent!]!
  }

  extend type Mutation {
    createEventsConsumersEvent(tenantId: String!, code: String!, name: String!): EventsConsumersEvent!
    deleteEventsConsumersEvent(id: ID!): Boolean!
  }
`;

export const EventsConsumersEventGqlResolvers = {
  Query: {
    getEventsConsumersEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
