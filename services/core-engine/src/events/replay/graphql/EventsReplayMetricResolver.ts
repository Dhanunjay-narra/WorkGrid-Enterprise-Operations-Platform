export const EventsReplayMetricGqlTypeDefs = `
  type EventsReplayMetric {
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
    getEventsReplayMetric(id: ID!): EventsReplayMetric
    listEventsReplayMetrics(tenantId: String!, limit: Int): [EventsReplayMetric!]!
  }

  extend type Mutation {
    createEventsReplayMetric(tenantId: String!, code: String!, name: String!): EventsReplayMetric!
    deleteEventsReplayMetric(id: ID!): Boolean!
  }
`;

export const EventsReplayMetricGqlResolvers = {
  Query: {
    getEventsReplayMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
