export const EventsPartitionsEventGqlTypeDefs = `
  type EventsPartitionsEvent {
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
    getEventsPartitionsEvent(id: ID!): EventsPartitionsEvent
    listEventsPartitionsEvents(tenantId: String!, limit: Int): [EventsPartitionsEvent!]!
  }

  extend type Mutation {
    createEventsPartitionsEvent(tenantId: String!, code: String!, name: String!): EventsPartitionsEvent!
    deleteEventsPartitionsEvent(id: ID!): Boolean!
  }
`;

export const EventsPartitionsEventGqlResolvers = {
  Query: {
    getEventsPartitionsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
