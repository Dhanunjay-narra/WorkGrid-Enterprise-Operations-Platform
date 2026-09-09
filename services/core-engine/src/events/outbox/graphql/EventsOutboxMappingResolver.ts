export const EventsOutboxMappingGqlTypeDefs = `
  type EventsOutboxMapping {
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
    getEventsOutboxMapping(id: ID!): EventsOutboxMapping
    listEventsOutboxMappings(tenantId: String!, limit: Int): [EventsOutboxMapping!]!
  }

  extend type Mutation {
    createEventsOutboxMapping(tenantId: String!, code: String!, name: String!): EventsOutboxMapping!
    deleteEventsOutboxMapping(id: ID!): Boolean!
  }
`;

export const EventsOutboxMappingGqlResolvers = {
  Query: {
    getEventsOutboxMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
