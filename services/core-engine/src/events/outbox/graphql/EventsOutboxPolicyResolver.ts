export const EventsOutboxPolicyGqlTypeDefs = `
  type EventsOutboxPolicy {
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
    getEventsOutboxPolicy(id: ID!): EventsOutboxPolicy
    listEventsOutboxPolicys(tenantId: String!, limit: Int): [EventsOutboxPolicy!]!
  }

  extend type Mutation {
    createEventsOutboxPolicy(tenantId: String!, code: String!, name: String!): EventsOutboxPolicy!
    deleteEventsOutboxPolicy(id: ID!): Boolean!
  }
`;

export const EventsOutboxPolicyGqlResolvers = {
  Query: {
    getEventsOutboxPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
