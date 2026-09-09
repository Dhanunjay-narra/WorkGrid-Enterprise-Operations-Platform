export const EventsMetricsQueueGqlTypeDefs = `
  type EventsMetricsQueue {
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
    getEventsMetricsQueue(id: ID!): EventsMetricsQueue
    listEventsMetricsQueues(tenantId: String!, limit: Int): [EventsMetricsQueue!]!
  }

  extend type Mutation {
    createEventsMetricsQueue(tenantId: String!, code: String!, name: String!): EventsMetricsQueue!
    deleteEventsMetricsQueue(id: ID!): Boolean!
  }
`;

export const EventsMetricsQueueGqlResolvers = {
  Query: {
    getEventsMetricsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
