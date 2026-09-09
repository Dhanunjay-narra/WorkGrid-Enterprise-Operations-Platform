export const EventsMetricsEventGqlTypeDefs = `
  type EventsMetricsEvent {
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
    getEventsMetricsEvent(id: ID!): EventsMetricsEvent
    listEventsMetricsEvents(tenantId: String!, limit: Int): [EventsMetricsEvent!]!
  }

  extend type Mutation {
    createEventsMetricsEvent(tenantId: String!, code: String!, name: String!): EventsMetricsEvent!
    deleteEventsMetricsEvent(id: ID!): Boolean!
  }
`;

export const EventsMetricsEventGqlResolvers = {
  Query: {
    getEventsMetricsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
