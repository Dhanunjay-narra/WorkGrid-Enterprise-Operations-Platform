export const EventsOutboxAssignmentGqlTypeDefs = `
  type EventsOutboxAssignment {
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
    getEventsOutboxAssignment(id: ID!): EventsOutboxAssignment
    listEventsOutboxAssignments(tenantId: String!, limit: Int): [EventsOutboxAssignment!]!
  }

  extend type Mutation {
    createEventsOutboxAssignment(tenantId: String!, code: String!, name: String!): EventsOutboxAssignment!
    deleteEventsOutboxAssignment(id: ID!): Boolean!
  }
`;

export const EventsOutboxAssignmentGqlResolvers = {
  Query: {
    getEventsOutboxAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
