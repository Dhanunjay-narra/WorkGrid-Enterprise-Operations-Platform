export const EventsPartitionsQueueGqlTypeDefs = `
  type EventsPartitionsQueue {
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
    getEventsPartitionsQueue(id: ID!): EventsPartitionsQueue
    listEventsPartitionsQueues(tenantId: String!, limit: Int): [EventsPartitionsQueue!]!
  }

  extend type Mutation {
    createEventsPartitionsQueue(tenantId: String!, code: String!, name: String!): EventsPartitionsQueue!
    deleteEventsPartitionsQueue(id: ID!): Boolean!
  }
`;

export const EventsPartitionsQueueGqlResolvers = {
  Query: {
    getEventsPartitionsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
