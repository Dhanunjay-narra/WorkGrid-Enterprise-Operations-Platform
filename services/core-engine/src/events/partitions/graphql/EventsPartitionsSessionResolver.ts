export const EventsPartitionsSessionGqlTypeDefs = `
  type EventsPartitionsSession {
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
    getEventsPartitionsSession(id: ID!): EventsPartitionsSession
    listEventsPartitionsSessions(tenantId: String!, limit: Int): [EventsPartitionsSession!]!
  }

  extend type Mutation {
    createEventsPartitionsSession(tenantId: String!, code: String!, name: String!): EventsPartitionsSession!
    deleteEventsPartitionsSession(id: ID!): Boolean!
  }
`;

export const EventsPartitionsSessionGqlResolvers = {
  Query: {
    getEventsPartitionsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
