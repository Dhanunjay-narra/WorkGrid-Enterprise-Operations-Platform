export const EventsOutboxNodeGqlTypeDefs = `
  type EventsOutboxNode {
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
    getEventsOutboxNode(id: ID!): EventsOutboxNode
    listEventsOutboxNodes(tenantId: String!, limit: Int): [EventsOutboxNode!]!
  }

  extend type Mutation {
    createEventsOutboxNode(tenantId: String!, code: String!, name: String!): EventsOutboxNode!
    deleteEventsOutboxNode(id: ID!): Boolean!
  }
`;

export const EventsOutboxNodeGqlResolvers = {
  Query: {
    getEventsOutboxNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
