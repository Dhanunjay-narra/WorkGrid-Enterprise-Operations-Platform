export const EventsDeadletterThresholdGqlTypeDefs = `
  type EventsDeadletterThreshold {
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
    getEventsDeadletterThreshold(id: ID!): EventsDeadletterThreshold
    listEventsDeadletterThresholds(tenantId: String!, limit: Int): [EventsDeadletterThreshold!]!
  }

  extend type Mutation {
    createEventsDeadletterThreshold(tenantId: String!, code: String!, name: String!): EventsDeadletterThreshold!
    deleteEventsDeadletterThreshold(id: ID!): Boolean!
  }
`;

export const EventsDeadletterThresholdGqlResolvers = {
  Query: {
    getEventsDeadletterThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
