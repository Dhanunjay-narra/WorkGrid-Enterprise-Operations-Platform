export const EventsPartitionsPolicyGqlTypeDefs = `
  type EventsPartitionsPolicy {
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
    getEventsPartitionsPolicy(id: ID!): EventsPartitionsPolicy
    listEventsPartitionsPolicys(tenantId: String!, limit: Int): [EventsPartitionsPolicy!]!
  }

  extend type Mutation {
    createEventsPartitionsPolicy(tenantId: String!, code: String!, name: String!): EventsPartitionsPolicy!
    deleteEventsPartitionsPolicy(id: ID!): Boolean!
  }
`;

export const EventsPartitionsPolicyGqlResolvers = {
  Query: {
    getEventsPartitionsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
