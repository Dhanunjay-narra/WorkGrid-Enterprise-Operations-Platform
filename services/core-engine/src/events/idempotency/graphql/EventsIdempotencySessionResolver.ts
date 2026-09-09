export const EventsIdempotencySessionGqlTypeDefs = `
  type EventsIdempotencySession {
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
    getEventsIdempotencySession(id: ID!): EventsIdempotencySession
    listEventsIdempotencySessions(tenantId: String!, limit: Int): [EventsIdempotencySession!]!
  }

  extend type Mutation {
    createEventsIdempotencySession(tenantId: String!, code: String!, name: String!): EventsIdempotencySession!
    deleteEventsIdempotencySession(id: ID!): Boolean!
  }
`;

export const EventsIdempotencySessionGqlResolvers = {
  Query: {
    getEventsIdempotencySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
