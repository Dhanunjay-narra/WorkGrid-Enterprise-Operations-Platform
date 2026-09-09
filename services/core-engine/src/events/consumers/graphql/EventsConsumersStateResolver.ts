export const EventsConsumersStateGqlTypeDefs = `
  type EventsConsumersState {
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
    getEventsConsumersState(id: ID!): EventsConsumersState
    listEventsConsumersStates(tenantId: String!, limit: Int): [EventsConsumersState!]!
  }

  extend type Mutation {
    createEventsConsumersState(tenantId: String!, code: String!, name: String!): EventsConsumersState!
    deleteEventsConsumersState(id: ID!): Boolean!
  }
`;

export const EventsConsumersStateGqlResolvers = {
  Query: {
    getEventsConsumersState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
