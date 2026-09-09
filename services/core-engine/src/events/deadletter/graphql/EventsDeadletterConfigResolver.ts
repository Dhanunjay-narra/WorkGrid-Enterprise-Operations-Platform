export const EventsDeadletterConfigGqlTypeDefs = `
  type EventsDeadletterConfig {
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
    getEventsDeadletterConfig(id: ID!): EventsDeadletterConfig
    listEventsDeadletterConfigs(tenantId: String!, limit: Int): [EventsDeadletterConfig!]!
  }

  extend type Mutation {
    createEventsDeadletterConfig(tenantId: String!, code: String!, name: String!): EventsDeadletterConfig!
    deleteEventsDeadletterConfig(id: ID!): Boolean!
  }
`;

export const EventsDeadletterConfigGqlResolvers = {
  Query: {
    getEventsDeadletterConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
