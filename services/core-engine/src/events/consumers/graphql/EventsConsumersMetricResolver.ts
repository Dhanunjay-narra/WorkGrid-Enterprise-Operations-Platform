export const EventsConsumersMetricGqlTypeDefs = `
  type EventsConsumersMetric {
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
    getEventsConsumersMetric(id: ID!): EventsConsumersMetric
    listEventsConsumersMetrics(tenantId: String!, limit: Int): [EventsConsumersMetric!]!
  }

  extend type Mutation {
    createEventsConsumersMetric(tenantId: String!, code: String!, name: String!): EventsConsumersMetric!
    deleteEventsConsumersMetric(id: ID!): Boolean!
  }
`;

export const EventsConsumersMetricGqlResolvers = {
  Query: {
    getEventsConsumersMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
