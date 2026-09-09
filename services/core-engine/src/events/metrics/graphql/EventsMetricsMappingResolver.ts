export const EventsMetricsMappingGqlTypeDefs = `
  type EventsMetricsMapping {
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
    getEventsMetricsMapping(id: ID!): EventsMetricsMapping
    listEventsMetricsMappings(tenantId: String!, limit: Int): [EventsMetricsMapping!]!
  }

  extend type Mutation {
    createEventsMetricsMapping(tenantId: String!, code: String!, name: String!): EventsMetricsMapping!
    deleteEventsMetricsMapping(id: ID!): Boolean!
  }
`;

export const EventsMetricsMappingGqlResolvers = {
  Query: {
    getEventsMetricsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
