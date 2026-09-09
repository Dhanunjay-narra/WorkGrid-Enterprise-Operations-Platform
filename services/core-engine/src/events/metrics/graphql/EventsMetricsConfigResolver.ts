export const EventsMetricsConfigGqlTypeDefs = `
  type EventsMetricsConfig {
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
    getEventsMetricsConfig(id: ID!): EventsMetricsConfig
    listEventsMetricsConfigs(tenantId: String!, limit: Int): [EventsMetricsConfig!]!
  }

  extend type Mutation {
    createEventsMetricsConfig(tenantId: String!, code: String!, name: String!): EventsMetricsConfig!
    deleteEventsMetricsConfig(id: ID!): Boolean!
  }
`;

export const EventsMetricsConfigGqlResolvers = {
  Query: {
    getEventsMetricsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
