export const EventsConsumersNodeGqlTypeDefs = `
  type EventsConsumersNode {
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
    getEventsConsumersNode(id: ID!): EventsConsumersNode
    listEventsConsumersNodes(tenantId: String!, limit: Int): [EventsConsumersNode!]!
  }

  extend type Mutation {
    createEventsConsumersNode(tenantId: String!, code: String!, name: String!): EventsConsumersNode!
    deleteEventsConsumersNode(id: ID!): Boolean!
  }
`;

export const EventsConsumersNodeGqlResolvers = {
  Query: {
    getEventsConsumersNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
