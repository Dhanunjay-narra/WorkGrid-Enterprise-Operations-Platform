export const EventsMetricsNodeGqlTypeDefs = `
  type EventsMetricsNode {
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
    getEventsMetricsNode(id: ID!): EventsMetricsNode
    listEventsMetricsNodes(tenantId: String!, limit: Int): [EventsMetricsNode!]!
  }

  extend type Mutation {
    createEventsMetricsNode(tenantId: String!, code: String!, name: String!): EventsMetricsNode!
    deleteEventsMetricsNode(id: ID!): Boolean!
  }
`;

export const EventsMetricsNodeGqlResolvers = {
  Query: {
    getEventsMetricsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
