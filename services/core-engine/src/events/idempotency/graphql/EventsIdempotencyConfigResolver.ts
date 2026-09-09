export const EventsIdempotencyConfigGqlTypeDefs = `
  type EventsIdempotencyConfig {
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
    getEventsIdempotencyConfig(id: ID!): EventsIdempotencyConfig
    listEventsIdempotencyConfigs(tenantId: String!, limit: Int): [EventsIdempotencyConfig!]!
  }

  extend type Mutation {
    createEventsIdempotencyConfig(tenantId: String!, code: String!, name: String!): EventsIdempotencyConfig!
    deleteEventsIdempotencyConfig(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyConfigGqlResolvers = {
  Query: {
    getEventsIdempotencyConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
