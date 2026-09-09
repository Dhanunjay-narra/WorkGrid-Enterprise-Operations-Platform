export const EventsOutboxRuleGqlTypeDefs = `
  type EventsOutboxRule {
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
    getEventsOutboxRule(id: ID!): EventsOutboxRule
    listEventsOutboxRules(tenantId: String!, limit: Int): [EventsOutboxRule!]!
  }

  extend type Mutation {
    createEventsOutboxRule(tenantId: String!, code: String!, name: String!): EventsOutboxRule!
    deleteEventsOutboxRule(id: ID!): Boolean!
  }
`;

export const EventsOutboxRuleGqlResolvers = {
  Query: {
    getEventsOutboxRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
