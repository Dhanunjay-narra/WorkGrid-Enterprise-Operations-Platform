export const EventsReplayQueueGqlTypeDefs = `
  type EventsReplayQueue {
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
    getEventsReplayQueue(id: ID!): EventsReplayQueue
    listEventsReplayQueues(tenantId: String!, limit: Int): [EventsReplayQueue!]!
  }

  extend type Mutation {
    createEventsReplayQueue(tenantId: String!, code: String!, name: String!): EventsReplayQueue!
    deleteEventsReplayQueue(id: ID!): Boolean!
  }
`;

export const EventsReplayQueueGqlResolvers = {
  Query: {
    getEventsReplayQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
