export const EventsIdempotencyPayloadGqlTypeDefs = `
  type EventsIdempotencyPayload {
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
    getEventsIdempotencyPayload(id: ID!): EventsIdempotencyPayload
    listEventsIdempotencyPayloads(tenantId: String!, limit: Int): [EventsIdempotencyPayload!]!
  }

  extend type Mutation {
    createEventsIdempotencyPayload(tenantId: String!, code: String!, name: String!): EventsIdempotencyPayload!
    deleteEventsIdempotencyPayload(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyPayloadGqlResolvers = {
  Query: {
    getEventsIdempotencyPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
