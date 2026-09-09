export const EventsReplayTaskGqlTypeDefs = `
  type EventsReplayTask {
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
    getEventsReplayTask(id: ID!): EventsReplayTask
    listEventsReplayTasks(tenantId: String!, limit: Int): [EventsReplayTask!]!
  }

  extend type Mutation {
    createEventsReplayTask(tenantId: String!, code: String!, name: String!): EventsReplayTask!
    deleteEventsReplayTask(id: ID!): Boolean!
  }
`;

export const EventsReplayTaskGqlResolvers = {
  Query: {
    getEventsReplayTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
