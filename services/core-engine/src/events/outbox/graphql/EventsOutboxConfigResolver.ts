export const EventsOutboxConfigGqlTypeDefs = `
  type EventsOutboxConfig {
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
    getEventsOutboxConfig(id: ID!): EventsOutboxConfig
    listEventsOutboxConfigs(tenantId: String!, limit: Int): [EventsOutboxConfig!]!
  }

  extend type Mutation {
    createEventsOutboxConfig(tenantId: String!, code: String!, name: String!): EventsOutboxConfig!
    deleteEventsOutboxConfig(id: ID!): Boolean!
  }
`;

export const EventsOutboxConfigGqlResolvers = {
  Query: {
    getEventsOutboxConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
