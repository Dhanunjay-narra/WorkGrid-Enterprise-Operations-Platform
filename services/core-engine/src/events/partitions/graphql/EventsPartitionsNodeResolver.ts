export const EventsPartitionsNodeGqlTypeDefs = `
  type EventsPartitionsNode {
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
    getEventsPartitionsNode(id: ID!): EventsPartitionsNode
    listEventsPartitionsNodes(tenantId: String!, limit: Int): [EventsPartitionsNode!]!
  }

  extend type Mutation {
    createEventsPartitionsNode(tenantId: String!, code: String!, name: String!): EventsPartitionsNode!
    deleteEventsPartitionsNode(id: ID!): Boolean!
  }
`;

export const EventsPartitionsNodeGqlResolvers = {
  Query: {
    getEventsPartitionsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
