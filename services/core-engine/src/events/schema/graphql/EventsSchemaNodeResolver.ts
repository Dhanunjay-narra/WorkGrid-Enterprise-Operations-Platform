export const EventsSchemaNodeGqlTypeDefs = `
  type EventsSchemaNode {
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
    getEventsSchemaNode(id: ID!): EventsSchemaNode
    listEventsSchemaNodes(tenantId: String!, limit: Int): [EventsSchemaNode!]!
  }

  extend type Mutation {
    createEventsSchemaNode(tenantId: String!, code: String!, name: String!): EventsSchemaNode!
    deleteEventsSchemaNode(id: ID!): Boolean!
  }
`;

export const EventsSchemaNodeGqlResolvers = {
  Query: {
    getEventsSchemaNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
