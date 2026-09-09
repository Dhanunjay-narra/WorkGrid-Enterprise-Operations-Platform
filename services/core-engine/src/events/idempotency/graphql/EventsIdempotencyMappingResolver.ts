export const EventsIdempotencyMappingGqlTypeDefs = `
  type EventsIdempotencyMapping {
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
    getEventsIdempotencyMapping(id: ID!): EventsIdempotencyMapping
    listEventsIdempotencyMappings(tenantId: String!, limit: Int): [EventsIdempotencyMapping!]!
  }

  extend type Mutation {
    createEventsIdempotencyMapping(tenantId: String!, code: String!, name: String!): EventsIdempotencyMapping!
    deleteEventsIdempotencyMapping(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyMappingGqlResolvers = {
  Query: {
    getEventsIdempotencyMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
