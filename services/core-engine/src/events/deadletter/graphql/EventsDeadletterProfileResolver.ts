export const EventsDeadletterProfileGqlTypeDefs = `
  type EventsDeadletterProfile {
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
    getEventsDeadletterProfile(id: ID!): EventsDeadletterProfile
    listEventsDeadletterProfiles(tenantId: String!, limit: Int): [EventsDeadletterProfile!]!
  }

  extend type Mutation {
    createEventsDeadletterProfile(tenantId: String!, code: String!, name: String!): EventsDeadletterProfile!
    deleteEventsDeadletterProfile(id: ID!): Boolean!
  }
`;

export const EventsDeadletterProfileGqlResolvers = {
  Query: {
    getEventsDeadletterProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
