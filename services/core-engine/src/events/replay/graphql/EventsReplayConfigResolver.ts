export const EventsReplayConfigGqlTypeDefs = `
  type EventsReplayConfig {
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
    getEventsReplayConfig(id: ID!): EventsReplayConfig
    listEventsReplayConfigs(tenantId: String!, limit: Int): [EventsReplayConfig!]!
  }

  extend type Mutation {
    createEventsReplayConfig(tenantId: String!, code: String!, name: String!): EventsReplayConfig!
    deleteEventsReplayConfig(id: ID!): Boolean!
  }
`;

export const EventsReplayConfigGqlResolvers = {
  Query: {
    getEventsReplayConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
