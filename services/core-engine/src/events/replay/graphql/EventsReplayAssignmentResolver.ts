export const EventsReplayAssignmentGqlTypeDefs = `
  type EventsReplayAssignment {
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
    getEventsReplayAssignment(id: ID!): EventsReplayAssignment
    listEventsReplayAssignments(tenantId: String!, limit: Int): [EventsReplayAssignment!]!
  }

  extend type Mutation {
    createEventsReplayAssignment(tenantId: String!, code: String!, name: String!): EventsReplayAssignment!
    deleteEventsReplayAssignment(id: ID!): Boolean!
  }
`;

export const EventsReplayAssignmentGqlResolvers = {
  Query: {
    getEventsReplayAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
