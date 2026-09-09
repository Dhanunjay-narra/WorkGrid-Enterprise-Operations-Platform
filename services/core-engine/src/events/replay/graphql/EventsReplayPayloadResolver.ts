export const EventsReplayPayloadGqlTypeDefs = `
  type EventsReplayPayload {
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
    getEventsReplayPayload(id: ID!): EventsReplayPayload
    listEventsReplayPayloads(tenantId: String!, limit: Int): [EventsReplayPayload!]!
  }

  extend type Mutation {
    createEventsReplayPayload(tenantId: String!, code: String!, name: String!): EventsReplayPayload!
    deleteEventsReplayPayload(id: ID!): Boolean!
  }
`;

export const EventsReplayPayloadGqlResolvers = {
  Query: {
    getEventsReplayPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
