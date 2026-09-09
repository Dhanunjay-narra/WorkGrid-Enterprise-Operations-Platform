export const EventsMetricsBatchGqlTypeDefs = `
  type EventsMetricsBatch {
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
    getEventsMetricsBatch(id: ID!): EventsMetricsBatch
    listEventsMetricsBatchs(tenantId: String!, limit: Int): [EventsMetricsBatch!]!
  }

  extend type Mutation {
    createEventsMetricsBatch(tenantId: String!, code: String!, name: String!): EventsMetricsBatch!
    deleteEventsMetricsBatch(id: ID!): Boolean!
  }
`;

export const EventsMetricsBatchGqlResolvers = {
  Query: {
    getEventsMetricsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
