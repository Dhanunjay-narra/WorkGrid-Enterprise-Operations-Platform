export const EventsReplayProfileGqlTypeDefs = `
  type EventsReplayProfile {
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
    getEventsReplayProfile(id: ID!): EventsReplayProfile
    listEventsReplayProfiles(tenantId: String!, limit: Int): [EventsReplayProfile!]!
  }

  extend type Mutation {
    createEventsReplayProfile(tenantId: String!, code: String!, name: String!): EventsReplayProfile!
    deleteEventsReplayProfile(id: ID!): Boolean!
  }
`;

export const EventsReplayProfileGqlResolvers = {
  Query: {
    getEventsReplayProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
