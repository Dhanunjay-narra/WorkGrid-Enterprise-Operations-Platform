export const EventsDeadletterMappingGqlTypeDefs = `
  type EventsDeadletterMapping {
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
    getEventsDeadletterMapping(id: ID!): EventsDeadletterMapping
    listEventsDeadletterMappings(tenantId: String!, limit: Int): [EventsDeadletterMapping!]!
  }

  extend type Mutation {
    createEventsDeadletterMapping(tenantId: String!, code: String!, name: String!): EventsDeadletterMapping!
    deleteEventsDeadletterMapping(id: ID!): Boolean!
  }
`;

export const EventsDeadletterMappingGqlResolvers = {
  Query: {
    getEventsDeadletterMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
