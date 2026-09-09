export const EventsIdempotencyStateGqlTypeDefs = `
  type EventsIdempotencyState {
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
    getEventsIdempotencyState(id: ID!): EventsIdempotencyState
    listEventsIdempotencyStates(tenantId: String!, limit: Int): [EventsIdempotencyState!]!
  }

  extend type Mutation {
    createEventsIdempotencyState(tenantId: String!, code: String!, name: String!): EventsIdempotencyState!
    deleteEventsIdempotencyState(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyStateGqlResolvers = {
  Query: {
    getEventsIdempotencyState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
