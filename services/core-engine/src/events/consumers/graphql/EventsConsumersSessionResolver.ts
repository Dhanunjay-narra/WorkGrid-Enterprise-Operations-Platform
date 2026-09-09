export const EventsConsumersSessionGqlTypeDefs = `
  type EventsConsumersSession {
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
    getEventsConsumersSession(id: ID!): EventsConsumersSession
    listEventsConsumersSessions(tenantId: String!, limit: Int): [EventsConsumersSession!]!
  }

  extend type Mutation {
    createEventsConsumersSession(tenantId: String!, code: String!, name: String!): EventsConsumersSession!
    deleteEventsConsumersSession(id: ID!): Boolean!
  }
`;

export const EventsConsumersSessionGqlResolvers = {
  Query: {
    getEventsConsumersSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
