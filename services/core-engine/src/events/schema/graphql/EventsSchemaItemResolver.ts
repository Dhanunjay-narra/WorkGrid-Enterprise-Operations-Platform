export const EventsSchemaItemGqlTypeDefs = `
  type EventsSchemaItem {
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
    getEventsSchemaItem(id: ID!): EventsSchemaItem
    listEventsSchemaItems(tenantId: String!, limit: Int): [EventsSchemaItem!]!
  }

  extend type Mutation {
    createEventsSchemaItem(tenantId: String!, code: String!, name: String!): EventsSchemaItem!
    deleteEventsSchemaItem(id: ID!): Boolean!
  }
`;

export const EventsSchemaItemGqlResolvers = {
  Query: {
    getEventsSchemaItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
