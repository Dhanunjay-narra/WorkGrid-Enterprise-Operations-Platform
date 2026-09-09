export const EventsConsumersPolicyGqlTypeDefs = `
  type EventsConsumersPolicy {
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
    getEventsConsumersPolicy(id: ID!): EventsConsumersPolicy
    listEventsConsumersPolicys(tenantId: String!, limit: Int): [EventsConsumersPolicy!]!
  }

  extend type Mutation {
    createEventsConsumersPolicy(tenantId: String!, code: String!, name: String!): EventsConsumersPolicy!
    deleteEventsConsumersPolicy(id: ID!): Boolean!
  }
`;

export const EventsConsumersPolicyGqlResolvers = {
  Query: {
    getEventsConsumersPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
