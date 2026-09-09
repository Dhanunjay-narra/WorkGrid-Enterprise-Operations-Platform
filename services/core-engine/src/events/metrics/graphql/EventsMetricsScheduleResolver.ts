export const EventsMetricsScheduleGqlTypeDefs = `
  type EventsMetricsSchedule {
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
    getEventsMetricsSchedule(id: ID!): EventsMetricsSchedule
    listEventsMetricsSchedules(tenantId: String!, limit: Int): [EventsMetricsSchedule!]!
  }

  extend type Mutation {
    createEventsMetricsSchedule(tenantId: String!, code: String!, name: String!): EventsMetricsSchedule!
    deleteEventsMetricsSchedule(id: ID!): Boolean!
  }
`;

export const EventsMetricsScheduleGqlResolvers = {
  Query: {
    getEventsMetricsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
