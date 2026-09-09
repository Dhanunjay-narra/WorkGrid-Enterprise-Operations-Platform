export const EventsPartitionsMappingGqlTypeDefs = `
  type EventsPartitionsMapping {
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
    getEventsPartitionsMapping(id: ID!): EventsPartitionsMapping
    listEventsPartitionsMappings(tenantId: String!, limit: Int): [EventsPartitionsMapping!]!
  }

  extend type Mutation {
    createEventsPartitionsMapping(tenantId: String!, code: String!, name: String!): EventsPartitionsMapping!
    deleteEventsPartitionsMapping(id: ID!): Boolean!
  }
`;

export const EventsPartitionsMappingGqlResolvers = {
  Query: {
    getEventsPartitionsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
