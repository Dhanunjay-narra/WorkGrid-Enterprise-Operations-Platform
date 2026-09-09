export const EventsSchemaSessionGqlTypeDefs = `
  type EventsSchemaSession {
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
    getEventsSchemaSession(id: ID!): EventsSchemaSession
    listEventsSchemaSessions(tenantId: String!, limit: Int): [EventsSchemaSession!]!
  }

  extend type Mutation {
    createEventsSchemaSession(tenantId: String!, code: String!, name: String!): EventsSchemaSession!
    deleteEventsSchemaSession(id: ID!): Boolean!
  }
`;

export const EventsSchemaSessionGqlResolvers = {
  Query: {
    getEventsSchemaSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
