export const EventsDeadletterNodeGqlTypeDefs = `
  type EventsDeadletterNode {
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
    getEventsDeadletterNode(id: ID!): EventsDeadletterNode
    listEventsDeadletterNodes(tenantId: String!, limit: Int): [EventsDeadletterNode!]!
  }

  extend type Mutation {
    createEventsDeadletterNode(tenantId: String!, code: String!, name: String!): EventsDeadletterNode!
    deleteEventsDeadletterNode(id: ID!): Boolean!
  }
`;

export const EventsDeadletterNodeGqlResolvers = {
  Query: {
    getEventsDeadletterNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
