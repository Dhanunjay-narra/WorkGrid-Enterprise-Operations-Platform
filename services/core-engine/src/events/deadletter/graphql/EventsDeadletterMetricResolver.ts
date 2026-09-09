export const EventsDeadletterMetricGqlTypeDefs = `
  type EventsDeadletterMetric {
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
    getEventsDeadletterMetric(id: ID!): EventsDeadletterMetric
    listEventsDeadletterMetrics(tenantId: String!, limit: Int): [EventsDeadletterMetric!]!
  }

  extend type Mutation {
    createEventsDeadletterMetric(tenantId: String!, code: String!, name: String!): EventsDeadletterMetric!
    deleteEventsDeadletterMetric(id: ID!): Boolean!
  }
`;

export const EventsDeadletterMetricGqlResolvers = {
  Query: {
    getEventsDeadletterMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
