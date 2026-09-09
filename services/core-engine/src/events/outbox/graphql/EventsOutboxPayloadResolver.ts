export const EventsOutboxPayloadGqlTypeDefs = `
  type EventsOutboxPayload {
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
    getEventsOutboxPayload(id: ID!): EventsOutboxPayload
    listEventsOutboxPayloads(tenantId: String!, limit: Int): [EventsOutboxPayload!]!
  }

  extend type Mutation {
    createEventsOutboxPayload(tenantId: String!, code: String!, name: String!): EventsOutboxPayload!
    deleteEventsOutboxPayload(id: ID!): Boolean!
  }
`;

export const EventsOutboxPayloadGqlResolvers = {
  Query: {
    getEventsOutboxPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
