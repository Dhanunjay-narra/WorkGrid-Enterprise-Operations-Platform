export const EventsReplayItemGqlTypeDefs = `
  type EventsReplayItem {
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
    getEventsReplayItem(id: ID!): EventsReplayItem
    listEventsReplayItems(tenantId: String!, limit: Int): [EventsReplayItem!]!
  }

  extend type Mutation {
    createEventsReplayItem(tenantId: String!, code: String!, name: String!): EventsReplayItem!
    deleteEventsReplayItem(id: ID!): Boolean!
  }
`;

export const EventsReplayItemGqlResolvers = {
  Query: {
    getEventsReplayItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
