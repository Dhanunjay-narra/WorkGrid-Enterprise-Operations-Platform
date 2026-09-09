export const EventsIdempotencyNodeGqlTypeDefs = `
  type EventsIdempotencyNode {
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
    getEventsIdempotencyNode(id: ID!): EventsIdempotencyNode
    listEventsIdempotencyNodes(tenantId: String!, limit: Int): [EventsIdempotencyNode!]!
  }

  extend type Mutation {
    createEventsIdempotencyNode(tenantId: String!, code: String!, name: String!): EventsIdempotencyNode!
    deleteEventsIdempotencyNode(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyNodeGqlResolvers = {
  Query: {
    getEventsIdempotencyNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
