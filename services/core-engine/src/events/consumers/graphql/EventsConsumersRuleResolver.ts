export const EventsConsumersRuleGqlTypeDefs = `
  type EventsConsumersRule {
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
    getEventsConsumersRule(id: ID!): EventsConsumersRule
    listEventsConsumersRules(tenantId: String!, limit: Int): [EventsConsumersRule!]!
  }

  extend type Mutation {
    createEventsConsumersRule(tenantId: String!, code: String!, name: String!): EventsConsumersRule!
    deleteEventsConsumersRule(id: ID!): Boolean!
  }
`;

export const EventsConsumersRuleGqlResolvers = {
  Query: {
    getEventsConsumersRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
