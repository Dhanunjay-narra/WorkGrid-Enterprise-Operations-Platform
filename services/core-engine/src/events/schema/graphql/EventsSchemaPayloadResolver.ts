export const EventsSchemaPayloadGqlTypeDefs = `
  type EventsSchemaPayload {
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
    getEventsSchemaPayload(id: ID!): EventsSchemaPayload
    listEventsSchemaPayloads(tenantId: String!, limit: Int): [EventsSchemaPayload!]!
  }

  extend type Mutation {
    createEventsSchemaPayload(tenantId: String!, code: String!, name: String!): EventsSchemaPayload!
    deleteEventsSchemaPayload(id: ID!): Boolean!
  }
`;

export const EventsSchemaPayloadGqlResolvers = {
  Query: {
    getEventsSchemaPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
