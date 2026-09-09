export const EventsPartitionsRuleGqlTypeDefs = `
  type EventsPartitionsRule {
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
    getEventsPartitionsRule(id: ID!): EventsPartitionsRule
    listEventsPartitionsRules(tenantId: String!, limit: Int): [EventsPartitionsRule!]!
  }

  extend type Mutation {
    createEventsPartitionsRule(tenantId: String!, code: String!, name: String!): EventsPartitionsRule!
    deleteEventsPartitionsRule(id: ID!): Boolean!
  }
`;

export const EventsPartitionsRuleGqlResolvers = {
  Query: {
    getEventsPartitionsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
