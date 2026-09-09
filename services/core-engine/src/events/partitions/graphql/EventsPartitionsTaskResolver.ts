export const EventsPartitionsTaskGqlTypeDefs = `
  type EventsPartitionsTask {
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
    getEventsPartitionsTask(id: ID!): EventsPartitionsTask
    listEventsPartitionsTasks(tenantId: String!, limit: Int): [EventsPartitionsTask!]!
  }

  extend type Mutation {
    createEventsPartitionsTask(tenantId: String!, code: String!, name: String!): EventsPartitionsTask!
    deleteEventsPartitionsTask(id: ID!): Boolean!
  }
`;

export const EventsPartitionsTaskGqlResolvers = {
  Query: {
    getEventsPartitionsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
