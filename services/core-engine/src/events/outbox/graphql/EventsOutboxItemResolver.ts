export const EventsOutboxItemGqlTypeDefs = `
  type EventsOutboxItem {
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
    getEventsOutboxItem(id: ID!): EventsOutboxItem
    listEventsOutboxItems(tenantId: String!, limit: Int): [EventsOutboxItem!]!
  }

  extend type Mutation {
    createEventsOutboxItem(tenantId: String!, code: String!, name: String!): EventsOutboxItem!
    deleteEventsOutboxItem(id: ID!): Boolean!
  }
`;

export const EventsOutboxItemGqlResolvers = {
  Query: {
    getEventsOutboxItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
