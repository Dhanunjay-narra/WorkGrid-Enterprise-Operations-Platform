export const EventsOutboxStateGqlTypeDefs = `
  type EventsOutboxState {
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
    getEventsOutboxState(id: ID!): EventsOutboxState
    listEventsOutboxStates(tenantId: String!, limit: Int): [EventsOutboxState!]!
  }

  extend type Mutation {
    createEventsOutboxState(tenantId: String!, code: String!, name: String!): EventsOutboxState!
    deleteEventsOutboxState(id: ID!): Boolean!
  }
`;

export const EventsOutboxStateGqlResolvers = {
  Query: {
    getEventsOutboxState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
