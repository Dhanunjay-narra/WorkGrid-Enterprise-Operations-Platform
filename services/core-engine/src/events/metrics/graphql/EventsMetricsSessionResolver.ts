export const EventsMetricsSessionGqlTypeDefs = `
  type EventsMetricsSession {
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
    getEventsMetricsSession(id: ID!): EventsMetricsSession
    listEventsMetricsSessions(tenantId: String!, limit: Int): [EventsMetricsSession!]!
  }

  extend type Mutation {
    createEventsMetricsSession(tenantId: String!, code: String!, name: String!): EventsMetricsSession!
    deleteEventsMetricsSession(id: ID!): Boolean!
  }
`;

export const EventsMetricsSessionGqlResolvers = {
  Query: {
    getEventsMetricsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
