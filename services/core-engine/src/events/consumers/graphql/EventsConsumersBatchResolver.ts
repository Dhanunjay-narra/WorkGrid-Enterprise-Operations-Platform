export const EventsConsumersBatchGqlTypeDefs = `
  type EventsConsumersBatch {
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
    getEventsConsumersBatch(id: ID!): EventsConsumersBatch
    listEventsConsumersBatchs(tenantId: String!, limit: Int): [EventsConsumersBatch!]!
  }

  extend type Mutation {
    createEventsConsumersBatch(tenantId: String!, code: String!, name: String!): EventsConsumersBatch!
    deleteEventsConsumersBatch(id: ID!): Boolean!
  }
`;

export const EventsConsumersBatchGqlResolvers = {
  Query: {
    getEventsConsumersBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
