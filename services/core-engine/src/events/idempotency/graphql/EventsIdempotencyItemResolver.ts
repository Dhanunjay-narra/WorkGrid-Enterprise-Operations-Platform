export const EventsIdempotencyItemGqlTypeDefs = `
  type EventsIdempotencyItem {
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
    getEventsIdempotencyItem(id: ID!): EventsIdempotencyItem
    listEventsIdempotencyItems(tenantId: String!, limit: Int): [EventsIdempotencyItem!]!
  }

  extend type Mutation {
    createEventsIdempotencyItem(tenantId: String!, code: String!, name: String!): EventsIdempotencyItem!
    deleteEventsIdempotencyItem(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyItemGqlResolvers = {
  Query: {
    getEventsIdempotencyItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
