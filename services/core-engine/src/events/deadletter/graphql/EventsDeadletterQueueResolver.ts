export const EventsDeadletterQueueGqlTypeDefs = `
  type EventsDeadletterQueue {
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
    getEventsDeadletterQueue(id: ID!): EventsDeadletterQueue
    listEventsDeadletterQueues(tenantId: String!, limit: Int): [EventsDeadletterQueue!]!
  }

  extend type Mutation {
    createEventsDeadletterQueue(tenantId: String!, code: String!, name: String!): EventsDeadletterQueue!
    deleteEventsDeadletterQueue(id: ID!): Boolean!
  }
`;

export const EventsDeadletterQueueGqlResolvers = {
  Query: {
    getEventsDeadletterQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
