export const EventsDeadletterStateGqlTypeDefs = `
  type EventsDeadletterState {
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
    getEventsDeadletterState(id: ID!): EventsDeadletterState
    listEventsDeadletterStates(tenantId: String!, limit: Int): [EventsDeadletterState!]!
  }

  extend type Mutation {
    createEventsDeadletterState(tenantId: String!, code: String!, name: String!): EventsDeadletterState!
    deleteEventsDeadletterState(id: ID!): Boolean!
  }
`;

export const EventsDeadletterStateGqlResolvers = {
  Query: {
    getEventsDeadletterState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
