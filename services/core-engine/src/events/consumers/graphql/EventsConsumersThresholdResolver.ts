export const EventsConsumersThresholdGqlTypeDefs = `
  type EventsConsumersThreshold {
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
    getEventsConsumersThreshold(id: ID!): EventsConsumersThreshold
    listEventsConsumersThresholds(tenantId: String!, limit: Int): [EventsConsumersThreshold!]!
  }

  extend type Mutation {
    createEventsConsumersThreshold(tenantId: String!, code: String!, name: String!): EventsConsumersThreshold!
    deleteEventsConsumersThreshold(id: ID!): Boolean!
  }
`;

export const EventsConsumersThresholdGqlResolvers = {
  Query: {
    getEventsConsumersThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
