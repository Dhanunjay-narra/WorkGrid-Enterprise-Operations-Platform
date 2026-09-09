export const EventsDeadletterRuleGqlTypeDefs = `
  type EventsDeadletterRule {
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
    getEventsDeadletterRule(id: ID!): EventsDeadletterRule
    listEventsDeadletterRules(tenantId: String!, limit: Int): [EventsDeadletterRule!]!
  }

  extend type Mutation {
    createEventsDeadletterRule(tenantId: String!, code: String!, name: String!): EventsDeadletterRule!
    deleteEventsDeadletterRule(id: ID!): Boolean!
  }
`;

export const EventsDeadletterRuleGqlResolvers = {
  Query: {
    getEventsDeadletterRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
