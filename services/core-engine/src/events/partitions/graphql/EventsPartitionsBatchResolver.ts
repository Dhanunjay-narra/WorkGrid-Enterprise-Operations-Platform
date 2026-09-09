export const EventsPartitionsBatchGqlTypeDefs = `
  type EventsPartitionsBatch {
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
    getEventsPartitionsBatch(id: ID!): EventsPartitionsBatch
    listEventsPartitionsBatchs(tenantId: String!, limit: Int): [EventsPartitionsBatch!]!
  }

  extend type Mutation {
    createEventsPartitionsBatch(tenantId: String!, code: String!, name: String!): EventsPartitionsBatch!
    deleteEventsPartitionsBatch(id: ID!): Boolean!
  }
`;

export const EventsPartitionsBatchGqlResolvers = {
  Query: {
    getEventsPartitionsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
