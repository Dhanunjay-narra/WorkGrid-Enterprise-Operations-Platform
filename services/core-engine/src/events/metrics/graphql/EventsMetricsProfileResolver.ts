export const EventsMetricsProfileGqlTypeDefs = `
  type EventsMetricsProfile {
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
    getEventsMetricsProfile(id: ID!): EventsMetricsProfile
    listEventsMetricsProfiles(tenantId: String!, limit: Int): [EventsMetricsProfile!]!
  }

  extend type Mutation {
    createEventsMetricsProfile(tenantId: String!, code: String!, name: String!): EventsMetricsProfile!
    deleteEventsMetricsProfile(id: ID!): Boolean!
  }
`;

export const EventsMetricsProfileGqlResolvers = {
  Query: {
    getEventsMetricsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
