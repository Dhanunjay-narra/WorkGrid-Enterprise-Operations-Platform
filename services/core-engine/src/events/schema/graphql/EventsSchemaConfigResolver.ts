export const EventsSchemaConfigGqlTypeDefs = `
  type EventsSchemaConfig {
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
    getEventsSchemaConfig(id: ID!): EventsSchemaConfig
    listEventsSchemaConfigs(tenantId: String!, limit: Int): [EventsSchemaConfig!]!
  }

  extend type Mutation {
    createEventsSchemaConfig(tenantId: String!, code: String!, name: String!): EventsSchemaConfig!
    deleteEventsSchemaConfig(id: ID!): Boolean!
  }
`;

export const EventsSchemaConfigGqlResolvers = {
  Query: {
    getEventsSchemaConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
