export const EventsMetricsPayloadGqlTypeDefs = `
  type EventsMetricsPayload {
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
    getEventsMetricsPayload(id: ID!): EventsMetricsPayload
    listEventsMetricsPayloads(tenantId: String!, limit: Int): [EventsMetricsPayload!]!
  }

  extend type Mutation {
    createEventsMetricsPayload(tenantId: String!, code: String!, name: String!): EventsMetricsPayload!
    deleteEventsMetricsPayload(id: ID!): Boolean!
  }
`;

export const EventsMetricsPayloadGqlResolvers = {
  Query: {
    getEventsMetricsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
