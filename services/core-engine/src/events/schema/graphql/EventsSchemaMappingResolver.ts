export const EventsSchemaMappingGqlTypeDefs = `
  type EventsSchemaMapping {
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
    getEventsSchemaMapping(id: ID!): EventsSchemaMapping
    listEventsSchemaMappings(tenantId: String!, limit: Int): [EventsSchemaMapping!]!
  }

  extend type Mutation {
    createEventsSchemaMapping(tenantId: String!, code: String!, name: String!): EventsSchemaMapping!
    deleteEventsSchemaMapping(id: ID!): Boolean!
  }
`;

export const EventsSchemaMappingGqlResolvers = {
  Query: {
    getEventsSchemaMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
