export const EventsConsumersPayloadGqlTypeDefs = `
  type EventsConsumersPayload {
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
    getEventsConsumersPayload(id: ID!): EventsConsumersPayload
    listEventsConsumersPayloads(tenantId: String!, limit: Int): [EventsConsumersPayload!]!
  }

  extend type Mutation {
    createEventsConsumersPayload(tenantId: String!, code: String!, name: String!): EventsConsumersPayload!
    deleteEventsConsumersPayload(id: ID!): Boolean!
  }
`;

export const EventsConsumersPayloadGqlResolvers = {
  Query: {
    getEventsConsumersPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
