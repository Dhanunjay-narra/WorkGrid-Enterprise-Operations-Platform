export const EventsPartitionsThresholdGqlTypeDefs = `
  type EventsPartitionsThreshold {
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
    getEventsPartitionsThreshold(id: ID!): EventsPartitionsThreshold
    listEventsPartitionsThresholds(tenantId: String!, limit: Int): [EventsPartitionsThreshold!]!
  }

  extend type Mutation {
    createEventsPartitionsThreshold(tenantId: String!, code: String!, name: String!): EventsPartitionsThreshold!
    deleteEventsPartitionsThreshold(id: ID!): Boolean!
  }
`;

export const EventsPartitionsThresholdGqlResolvers = {
  Query: {
    getEventsPartitionsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
