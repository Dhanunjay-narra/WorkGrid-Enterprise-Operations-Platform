export const EventsMetricsStateGqlTypeDefs = `
  type EventsMetricsState {
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
    getEventsMetricsState(id: ID!): EventsMetricsState
    listEventsMetricsStates(tenantId: String!, limit: Int): [EventsMetricsState!]!
  }

  extend type Mutation {
    createEventsMetricsState(tenantId: String!, code: String!, name: String!): EventsMetricsState!
    deleteEventsMetricsState(id: ID!): Boolean!
  }
`;

export const EventsMetricsStateGqlResolvers = {
  Query: {
    getEventsMetricsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
