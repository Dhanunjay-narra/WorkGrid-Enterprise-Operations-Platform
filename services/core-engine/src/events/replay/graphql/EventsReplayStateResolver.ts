export const EventsReplayStateGqlTypeDefs = `
  type EventsReplayState {
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
    getEventsReplayState(id: ID!): EventsReplayState
    listEventsReplayStates(tenantId: String!, limit: Int): [EventsReplayState!]!
  }

  extend type Mutation {
    createEventsReplayState(tenantId: String!, code: String!, name: String!): EventsReplayState!
    deleteEventsReplayState(id: ID!): Boolean!
  }
`;

export const EventsReplayStateGqlResolvers = {
  Query: {
    getEventsReplayState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
