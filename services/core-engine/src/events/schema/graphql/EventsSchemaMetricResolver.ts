export const EventsSchemaMetricGqlTypeDefs = `
  type EventsSchemaMetric {
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
    getEventsSchemaMetric(id: ID!): EventsSchemaMetric
    listEventsSchemaMetrics(tenantId: String!, limit: Int): [EventsSchemaMetric!]!
  }

  extend type Mutation {
    createEventsSchemaMetric(tenantId: String!, code: String!, name: String!): EventsSchemaMetric!
    deleteEventsSchemaMetric(id: ID!): Boolean!
  }
`;

export const EventsSchemaMetricGqlResolvers = {
  Query: {
    getEventsSchemaMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
