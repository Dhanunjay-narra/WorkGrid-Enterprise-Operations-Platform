export const EventsReplayPolicyGqlTypeDefs = `
  type EventsReplayPolicy {
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
    getEventsReplayPolicy(id: ID!): EventsReplayPolicy
    listEventsReplayPolicys(tenantId: String!, limit: Int): [EventsReplayPolicy!]!
  }

  extend type Mutation {
    createEventsReplayPolicy(tenantId: String!, code: String!, name: String!): EventsReplayPolicy!
    deleteEventsReplayPolicy(id: ID!): Boolean!
  }
`;

export const EventsReplayPolicyGqlResolvers = {
  Query: {
    getEventsReplayPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
