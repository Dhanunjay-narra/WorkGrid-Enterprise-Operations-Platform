export const EventsSchemaPolicyGqlTypeDefs = `
  type EventsSchemaPolicy {
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
    getEventsSchemaPolicy(id: ID!): EventsSchemaPolicy
    listEventsSchemaPolicys(tenantId: String!, limit: Int): [EventsSchemaPolicy!]!
  }

  extend type Mutation {
    createEventsSchemaPolicy(tenantId: String!, code: String!, name: String!): EventsSchemaPolicy!
    deleteEventsSchemaPolicy(id: ID!): Boolean!
  }
`;

export const EventsSchemaPolicyGqlResolvers = {
  Query: {
    getEventsSchemaPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
