export const EventsOutboxTaskGqlTypeDefs = `
  type EventsOutboxTask {
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
    getEventsOutboxTask(id: ID!): EventsOutboxTask
    listEventsOutboxTasks(tenantId: String!, limit: Int): [EventsOutboxTask!]!
  }

  extend type Mutation {
    createEventsOutboxTask(tenantId: String!, code: String!, name: String!): EventsOutboxTask!
    deleteEventsOutboxTask(id: ID!): Boolean!
  }
`;

export const EventsOutboxTaskGqlResolvers = {
  Query: {
    getEventsOutboxTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
