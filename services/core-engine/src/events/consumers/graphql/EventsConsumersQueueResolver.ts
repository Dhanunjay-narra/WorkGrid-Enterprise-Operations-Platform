export const EventsConsumersQueueGqlTypeDefs = `
  type EventsConsumersQueue {
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
    getEventsConsumersQueue(id: ID!): EventsConsumersQueue
    listEventsConsumersQueues(tenantId: String!, limit: Int): [EventsConsumersQueue!]!
  }

  extend type Mutation {
    createEventsConsumersQueue(tenantId: String!, code: String!, name: String!): EventsConsumersQueue!
    deleteEventsConsumersQueue(id: ID!): Boolean!
  }
`;

export const EventsConsumersQueueGqlResolvers = {
  Query: {
    getEventsConsumersQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
