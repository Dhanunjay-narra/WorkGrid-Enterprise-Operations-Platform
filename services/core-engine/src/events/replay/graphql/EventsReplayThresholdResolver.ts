export const EventsReplayThresholdGqlTypeDefs = `
  type EventsReplayThreshold {
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
    getEventsReplayThreshold(id: ID!): EventsReplayThreshold
    listEventsReplayThresholds(tenantId: String!, limit: Int): [EventsReplayThreshold!]!
  }

  extend type Mutation {
    createEventsReplayThreshold(tenantId: String!, code: String!, name: String!): EventsReplayThreshold!
    deleteEventsReplayThreshold(id: ID!): Boolean!
  }
`;

export const EventsReplayThresholdGqlResolvers = {
  Query: {
    getEventsReplayThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
