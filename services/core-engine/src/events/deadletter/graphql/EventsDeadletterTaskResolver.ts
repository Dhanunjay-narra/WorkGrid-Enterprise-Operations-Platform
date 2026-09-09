export const EventsDeadletterTaskGqlTypeDefs = `
  type EventsDeadletterTask {
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
    getEventsDeadletterTask(id: ID!): EventsDeadletterTask
    listEventsDeadletterTasks(tenantId: String!, limit: Int): [EventsDeadletterTask!]!
  }

  extend type Mutation {
    createEventsDeadletterTask(tenantId: String!, code: String!, name: String!): EventsDeadletterTask!
    deleteEventsDeadletterTask(id: ID!): Boolean!
  }
`;

export const EventsDeadletterTaskGqlResolvers = {
  Query: {
    getEventsDeadletterTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
