export const EventsDeadletterAssignmentGqlTypeDefs = `
  type EventsDeadletterAssignment {
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
    getEventsDeadletterAssignment(id: ID!): EventsDeadletterAssignment
    listEventsDeadletterAssignments(tenantId: String!, limit: Int): [EventsDeadletterAssignment!]!
  }

  extend type Mutation {
    createEventsDeadletterAssignment(tenantId: String!, code: String!, name: String!): EventsDeadletterAssignment!
    deleteEventsDeadletterAssignment(id: ID!): Boolean!
  }
`;

export const EventsDeadletterAssignmentGqlResolvers = {
  Query: {
    getEventsDeadletterAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
