export const EventsSchemaRuleGqlTypeDefs = `
  type EventsSchemaRule {
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
    getEventsSchemaRule(id: ID!): EventsSchemaRule
    listEventsSchemaRules(tenantId: String!, limit: Int): [EventsSchemaRule!]!
  }

  extend type Mutation {
    createEventsSchemaRule(tenantId: String!, code: String!, name: String!): EventsSchemaRule!
    deleteEventsSchemaRule(id: ID!): Boolean!
  }
`;

export const EventsSchemaRuleGqlResolvers = {
  Query: {
    getEventsSchemaRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
