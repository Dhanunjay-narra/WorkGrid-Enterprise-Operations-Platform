export const EventsMetricsRuleGqlTypeDefs = `
  type EventsMetricsRule {
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
    getEventsMetricsRule(id: ID!): EventsMetricsRule
    listEventsMetricsRules(tenantId: String!, limit: Int): [EventsMetricsRule!]!
  }

  extend type Mutation {
    createEventsMetricsRule(tenantId: String!, code: String!, name: String!): EventsMetricsRule!
    deleteEventsMetricsRule(id: ID!): Boolean!
  }
`;

export const EventsMetricsRuleGqlResolvers = {
  Query: {
    getEventsMetricsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
