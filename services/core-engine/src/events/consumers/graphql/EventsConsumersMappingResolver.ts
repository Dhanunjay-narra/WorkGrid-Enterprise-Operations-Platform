export const EventsConsumersMappingGqlTypeDefs = `
  type EventsConsumersMapping {
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
    getEventsConsumersMapping(id: ID!): EventsConsumersMapping
    listEventsConsumersMappings(tenantId: String!, limit: Int): [EventsConsumersMapping!]!
  }

  extend type Mutation {
    createEventsConsumersMapping(tenantId: String!, code: String!, name: String!): EventsConsumersMapping!
    deleteEventsConsumersMapping(id: ID!): Boolean!
  }
`;

export const EventsConsumersMappingGqlResolvers = {
  Query: {
    getEventsConsumersMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
