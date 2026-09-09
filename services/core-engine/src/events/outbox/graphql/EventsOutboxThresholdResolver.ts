export const EventsOutboxThresholdGqlTypeDefs = `
  type EventsOutboxThreshold {
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
    getEventsOutboxThreshold(id: ID!): EventsOutboxThreshold
    listEventsOutboxThresholds(tenantId: String!, limit: Int): [EventsOutboxThreshold!]!
  }

  extend type Mutation {
    createEventsOutboxThreshold(tenantId: String!, code: String!, name: String!): EventsOutboxThreshold!
    deleteEventsOutboxThreshold(id: ID!): Boolean!
  }
`;

export const EventsOutboxThresholdGqlResolvers = {
  Query: {
    getEventsOutboxThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
