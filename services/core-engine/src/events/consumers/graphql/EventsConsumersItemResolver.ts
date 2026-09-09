export const EventsConsumersItemGqlTypeDefs = `
  type EventsConsumersItem {
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
    getEventsConsumersItem(id: ID!): EventsConsumersItem
    listEventsConsumersItems(tenantId: String!, limit: Int): [EventsConsumersItem!]!
  }

  extend type Mutation {
    createEventsConsumersItem(tenantId: String!, code: String!, name: String!): EventsConsumersItem!
    deleteEventsConsumersItem(id: ID!): Boolean!
  }
`;

export const EventsConsumersItemGqlResolvers = {
  Query: {
    getEventsConsumersItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
