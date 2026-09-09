export const EventsReplayRuleGqlTypeDefs = `
  type EventsReplayRule {
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
    getEventsReplayRule(id: ID!): EventsReplayRule
    listEventsReplayRules(tenantId: String!, limit: Int): [EventsReplayRule!]!
  }

  extend type Mutation {
    createEventsReplayRule(tenantId: String!, code: String!, name: String!): EventsReplayRule!
    deleteEventsReplayRule(id: ID!): Boolean!
  }
`;

export const EventsReplayRuleGqlResolvers = {
  Query: {
    getEventsReplayRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
