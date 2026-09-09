export const EventsSchemaEventGqlTypeDefs = `
  type EventsSchemaEvent {
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
    getEventsSchemaEvent(id: ID!): EventsSchemaEvent
    listEventsSchemaEvents(tenantId: String!, limit: Int): [EventsSchemaEvent!]!
  }

  extend type Mutation {
    createEventsSchemaEvent(tenantId: String!, code: String!, name: String!): EventsSchemaEvent!
    deleteEventsSchemaEvent(id: ID!): Boolean!
  }
`;

export const EventsSchemaEventGqlResolvers = {
  Query: {
    getEventsSchemaEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
