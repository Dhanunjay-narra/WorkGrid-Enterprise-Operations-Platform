export const EventsMetricsThresholdGqlTypeDefs = `
  type EventsMetricsThreshold {
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
    getEventsMetricsThreshold(id: ID!): EventsMetricsThreshold
    listEventsMetricsThresholds(tenantId: String!, limit: Int): [EventsMetricsThreshold!]!
  }

  extend type Mutation {
    createEventsMetricsThreshold(tenantId: String!, code: String!, name: String!): EventsMetricsThreshold!
    deleteEventsMetricsThreshold(id: ID!): Boolean!
  }
`;

export const EventsMetricsThresholdGqlResolvers = {
  Query: {
    getEventsMetricsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
