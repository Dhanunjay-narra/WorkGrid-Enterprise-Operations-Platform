export const EventsIdempotencyRuleGqlTypeDefs = `
  type EventsIdempotencyRule {
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
    getEventsIdempotencyRule(id: ID!): EventsIdempotencyRule
    listEventsIdempotencyRules(tenantId: String!, limit: Int): [EventsIdempotencyRule!]!
  }

  extend type Mutation {
    createEventsIdempotencyRule(tenantId: String!, code: String!, name: String!): EventsIdempotencyRule!
    deleteEventsIdempotencyRule(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyRuleGqlResolvers = {
  Query: {
    getEventsIdempotencyRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
