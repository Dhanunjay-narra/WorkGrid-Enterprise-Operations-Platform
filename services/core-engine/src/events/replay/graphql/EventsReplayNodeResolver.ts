export const EventsReplayNodeGqlTypeDefs = `
  type EventsReplayNode {
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
    getEventsReplayNode(id: ID!): EventsReplayNode
    listEventsReplayNodes(tenantId: String!, limit: Int): [EventsReplayNode!]!
  }

  extend type Mutation {
    createEventsReplayNode(tenantId: String!, code: String!, name: String!): EventsReplayNode!
    deleteEventsReplayNode(id: ID!): Boolean!
  }
`;

export const EventsReplayNodeGqlResolvers = {
  Query: {
    getEventsReplayNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
