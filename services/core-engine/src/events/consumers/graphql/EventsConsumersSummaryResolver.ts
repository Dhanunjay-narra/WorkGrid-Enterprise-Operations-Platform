export const EventsConsumersSummaryGqlTypeDefs = `
  type EventsConsumersSummary {
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
    getEventsConsumersSummary(id: ID!): EventsConsumersSummary
    listEventsConsumersSummarys(tenantId: String!, limit: Int): [EventsConsumersSummary!]!
  }

  extend type Mutation {
    createEventsConsumersSummary(tenantId: String!, code: String!, name: String!): EventsConsumersSummary!
    deleteEventsConsumersSummary(id: ID!): Boolean!
  }
`;

export const EventsConsumersSummaryGqlResolvers = {
  Query: {
    getEventsConsumersSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
