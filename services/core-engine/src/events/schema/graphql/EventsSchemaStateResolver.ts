export const EventsSchemaStateGqlTypeDefs = `
  type EventsSchemaState {
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
    getEventsSchemaState(id: ID!): EventsSchemaState
    listEventsSchemaStates(tenantId: String!, limit: Int): [EventsSchemaState!]!
  }

  extend type Mutation {
    createEventsSchemaState(tenantId: String!, code: String!, name: String!): EventsSchemaState!
    deleteEventsSchemaState(id: ID!): Boolean!
  }
`;

export const EventsSchemaStateGqlResolvers = {
  Query: {
    getEventsSchemaState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
