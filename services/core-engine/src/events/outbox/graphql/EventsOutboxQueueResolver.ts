export const EventsOutboxQueueGqlTypeDefs = `
  type EventsOutboxQueue {
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
    getEventsOutboxQueue(id: ID!): EventsOutboxQueue
    listEventsOutboxQueues(tenantId: String!, limit: Int): [EventsOutboxQueue!]!
  }

  extend type Mutation {
    createEventsOutboxQueue(tenantId: String!, code: String!, name: String!): EventsOutboxQueue!
    deleteEventsOutboxQueue(id: ID!): Boolean!
  }
`;

export const EventsOutboxQueueGqlResolvers = {
  Query: {
    getEventsOutboxQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
