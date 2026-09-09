export const EventsDeadletterItemGqlTypeDefs = `
  type EventsDeadletterItem {
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
    getEventsDeadletterItem(id: ID!): EventsDeadletterItem
    listEventsDeadletterItems(tenantId: String!, limit: Int): [EventsDeadletterItem!]!
  }

  extend type Mutation {
    createEventsDeadletterItem(tenantId: String!, code: String!, name: String!): EventsDeadletterItem!
    deleteEventsDeadletterItem(id: ID!): Boolean!
  }
`;

export const EventsDeadletterItemGqlResolvers = {
  Query: {
    getEventsDeadletterItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
