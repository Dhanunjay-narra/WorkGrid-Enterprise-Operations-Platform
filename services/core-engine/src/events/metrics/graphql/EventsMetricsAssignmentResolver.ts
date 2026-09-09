export const EventsMetricsAssignmentGqlTypeDefs = `
  type EventsMetricsAssignment {
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
    getEventsMetricsAssignment(id: ID!): EventsMetricsAssignment
    listEventsMetricsAssignments(tenantId: String!, limit: Int): [EventsMetricsAssignment!]!
  }

  extend type Mutation {
    createEventsMetricsAssignment(tenantId: String!, code: String!, name: String!): EventsMetricsAssignment!
    deleteEventsMetricsAssignment(id: ID!): Boolean!
  }
`;

export const EventsMetricsAssignmentGqlResolvers = {
  Query: {
    getEventsMetricsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
