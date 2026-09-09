export const EventsReplayMappingGqlTypeDefs = `
  type EventsReplayMapping {
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
    getEventsReplayMapping(id: ID!): EventsReplayMapping
    listEventsReplayMappings(tenantId: String!, limit: Int): [EventsReplayMapping!]!
  }

  extend type Mutation {
    createEventsReplayMapping(tenantId: String!, code: String!, name: String!): EventsReplayMapping!
    deleteEventsReplayMapping(id: ID!): Boolean!
  }
`;

export const EventsReplayMappingGqlResolvers = {
  Query: {
    getEventsReplayMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
