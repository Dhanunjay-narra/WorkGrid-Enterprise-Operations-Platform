export const EventsConsumersAssignmentGqlTypeDefs = `
  type EventsConsumersAssignment {
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
    getEventsConsumersAssignment(id: ID!): EventsConsumersAssignment
    listEventsConsumersAssignments(tenantId: String!, limit: Int): [EventsConsumersAssignment!]!
  }

  extend type Mutation {
    createEventsConsumersAssignment(tenantId: String!, code: String!, name: String!): EventsConsumersAssignment!
    deleteEventsConsumersAssignment(id: ID!): Boolean!
  }
`;

export const EventsConsumersAssignmentGqlResolvers = {
  Query: {
    getEventsConsumersAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
