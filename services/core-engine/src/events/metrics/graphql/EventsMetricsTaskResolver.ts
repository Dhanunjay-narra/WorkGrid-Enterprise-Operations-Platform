export const EventsMetricsTaskGqlTypeDefs = `
  type EventsMetricsTask {
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
    getEventsMetricsTask(id: ID!): EventsMetricsTask
    listEventsMetricsTasks(tenantId: String!, limit: Int): [EventsMetricsTask!]!
  }

  extend type Mutation {
    createEventsMetricsTask(tenantId: String!, code: String!, name: String!): EventsMetricsTask!
    deleteEventsMetricsTask(id: ID!): Boolean!
  }
`;

export const EventsMetricsTaskGqlResolvers = {
  Query: {
    getEventsMetricsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
