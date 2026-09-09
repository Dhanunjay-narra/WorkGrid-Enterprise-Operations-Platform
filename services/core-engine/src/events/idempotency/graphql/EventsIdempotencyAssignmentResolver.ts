export const EventsIdempotencyAssignmentGqlTypeDefs = `
  type EventsIdempotencyAssignment {
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
    getEventsIdempotencyAssignment(id: ID!): EventsIdempotencyAssignment
    listEventsIdempotencyAssignments(tenantId: String!, limit: Int): [EventsIdempotencyAssignment!]!
  }

  extend type Mutation {
    createEventsIdempotencyAssignment(tenantId: String!, code: String!, name: String!): EventsIdempotencyAssignment!
    deleteEventsIdempotencyAssignment(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyAssignmentGqlResolvers = {
  Query: {
    getEventsIdempotencyAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
