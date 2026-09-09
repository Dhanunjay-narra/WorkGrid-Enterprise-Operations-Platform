export const EventsPartitionsConfigGqlTypeDefs = `
  type EventsPartitionsConfig {
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
    getEventsPartitionsConfig(id: ID!): EventsPartitionsConfig
    listEventsPartitionsConfigs(tenantId: String!, limit: Int): [EventsPartitionsConfig!]!
  }

  extend type Mutation {
    createEventsPartitionsConfig(tenantId: String!, code: String!, name: String!): EventsPartitionsConfig!
    deleteEventsPartitionsConfig(id: ID!): Boolean!
  }
`;

export const EventsPartitionsConfigGqlResolvers = {
  Query: {
    getEventsPartitionsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
