export const EventsConsumersTaskGqlTypeDefs = `
  type EventsConsumersTask {
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
    getEventsConsumersTask(id: ID!): EventsConsumersTask
    listEventsConsumersTasks(tenantId: String!, limit: Int): [EventsConsumersTask!]!
  }

  extend type Mutation {
    createEventsConsumersTask(tenantId: String!, code: String!, name: String!): EventsConsumersTask!
    deleteEventsConsumersTask(id: ID!): Boolean!
  }
`;

export const EventsConsumersTaskGqlResolvers = {
  Query: {
    getEventsConsumersTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
