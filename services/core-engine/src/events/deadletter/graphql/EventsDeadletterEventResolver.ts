export const EventsDeadletterEventGqlTypeDefs = `
  type EventsDeadletterEvent {
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
    getEventsDeadletterEvent(id: ID!): EventsDeadletterEvent
    listEventsDeadletterEvents(tenantId: String!, limit: Int): [EventsDeadletterEvent!]!
  }

  extend type Mutation {
    createEventsDeadletterEvent(tenantId: String!, code: String!, name: String!): EventsDeadletterEvent!
    deleteEventsDeadletterEvent(id: ID!): Boolean!
  }
`;

export const EventsDeadletterEventGqlResolvers = {
  Query: {
    getEventsDeadletterEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
