export const EventsSchemaTaskGqlTypeDefs = `
  type EventsSchemaTask {
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
    getEventsSchemaTask(id: ID!): EventsSchemaTask
    listEventsSchemaTasks(tenantId: String!, limit: Int): [EventsSchemaTask!]!
  }

  extend type Mutation {
    createEventsSchemaTask(tenantId: String!, code: String!, name: String!): EventsSchemaTask!
    deleteEventsSchemaTask(id: ID!): Boolean!
  }
`;

export const EventsSchemaTaskGqlResolvers = {
  Query: {
    getEventsSchemaTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
