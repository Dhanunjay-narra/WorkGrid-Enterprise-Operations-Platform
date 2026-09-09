export const EventsOutboxProfileGqlTypeDefs = `
  type EventsOutboxProfile {
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
    getEventsOutboxProfile(id: ID!): EventsOutboxProfile
    listEventsOutboxProfiles(tenantId: String!, limit: Int): [EventsOutboxProfile!]!
  }

  extend type Mutation {
    createEventsOutboxProfile(tenantId: String!, code: String!, name: String!): EventsOutboxProfile!
    deleteEventsOutboxProfile(id: ID!): Boolean!
  }
`;

export const EventsOutboxProfileGqlResolvers = {
  Query: {
    getEventsOutboxProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
