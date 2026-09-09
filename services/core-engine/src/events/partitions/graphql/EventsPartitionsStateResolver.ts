export const EventsPartitionsStateGqlTypeDefs = `
  type EventsPartitionsState {
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
    getEventsPartitionsState(id: ID!): EventsPartitionsState
    listEventsPartitionsStates(tenantId: String!, limit: Int): [EventsPartitionsState!]!
  }

  extend type Mutation {
    createEventsPartitionsState(tenantId: String!, code: String!, name: String!): EventsPartitionsState!
    deleteEventsPartitionsState(id: ID!): Boolean!
  }
`;

export const EventsPartitionsStateGqlResolvers = {
  Query: {
    getEventsPartitionsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
