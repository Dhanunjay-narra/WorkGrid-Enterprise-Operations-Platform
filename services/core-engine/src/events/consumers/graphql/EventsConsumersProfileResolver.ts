export const EventsConsumersProfileGqlTypeDefs = `
  type EventsConsumersProfile {
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
    getEventsConsumersProfile(id: ID!): EventsConsumersProfile
    listEventsConsumersProfiles(tenantId: String!, limit: Int): [EventsConsumersProfile!]!
  }

  extend type Mutation {
    createEventsConsumersProfile(tenantId: String!, code: String!, name: String!): EventsConsumersProfile!
    deleteEventsConsumersProfile(id: ID!): Boolean!
  }
`;

export const EventsConsumersProfileGqlResolvers = {
  Query: {
    getEventsConsumersProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
