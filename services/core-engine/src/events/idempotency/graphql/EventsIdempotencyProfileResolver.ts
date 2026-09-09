export const EventsIdempotencyProfileGqlTypeDefs = `
  type EventsIdempotencyProfile {
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
    getEventsIdempotencyProfile(id: ID!): EventsIdempotencyProfile
    listEventsIdempotencyProfiles(tenantId: String!, limit: Int): [EventsIdempotencyProfile!]!
  }

  extend type Mutation {
    createEventsIdempotencyProfile(tenantId: String!, code: String!, name: String!): EventsIdempotencyProfile!
    deleteEventsIdempotencyProfile(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyProfileGqlResolvers = {
  Query: {
    getEventsIdempotencyProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
