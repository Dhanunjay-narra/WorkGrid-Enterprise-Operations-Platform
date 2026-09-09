export const EventsConsumersConfigGqlTypeDefs = `
  type EventsConsumersConfig {
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
    getEventsConsumersConfig(id: ID!): EventsConsumersConfig
    listEventsConsumersConfigs(tenantId: String!, limit: Int): [EventsConsumersConfig!]!
  }

  extend type Mutation {
    createEventsConsumersConfig(tenantId: String!, code: String!, name: String!): EventsConsumersConfig!
    deleteEventsConsumersConfig(id: ID!): Boolean!
  }
`;

export const EventsConsumersConfigGqlResolvers = {
  Query: {
    getEventsConsumersConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
