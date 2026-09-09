export const EventsSchemaThresholdGqlTypeDefs = `
  type EventsSchemaThreshold {
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
    getEventsSchemaThreshold(id: ID!): EventsSchemaThreshold
    listEventsSchemaThresholds(tenantId: String!, limit: Int): [EventsSchemaThreshold!]!
  }

  extend type Mutation {
    createEventsSchemaThreshold(tenantId: String!, code: String!, name: String!): EventsSchemaThreshold!
    deleteEventsSchemaThreshold(id: ID!): Boolean!
  }
`;

export const EventsSchemaThresholdGqlResolvers = {
  Query: {
    getEventsSchemaThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
