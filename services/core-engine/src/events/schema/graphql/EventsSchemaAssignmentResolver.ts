export const EventsSchemaAssignmentGqlTypeDefs = `
  type EventsSchemaAssignment {
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
    getEventsSchemaAssignment(id: ID!): EventsSchemaAssignment
    listEventsSchemaAssignments(tenantId: String!, limit: Int): [EventsSchemaAssignment!]!
  }

  extend type Mutation {
    createEventsSchemaAssignment(tenantId: String!, code: String!, name: String!): EventsSchemaAssignment!
    deleteEventsSchemaAssignment(id: ID!): Boolean!
  }
`;

export const EventsSchemaAssignmentGqlResolvers = {
  Query: {
    getEventsSchemaAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
