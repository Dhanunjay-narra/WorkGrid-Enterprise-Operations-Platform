export const EventsIdempotencyPolicyGqlTypeDefs = `
  type EventsIdempotencyPolicy {
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
    getEventsIdempotencyPolicy(id: ID!): EventsIdempotencyPolicy
    listEventsIdempotencyPolicys(tenantId: String!, limit: Int): [EventsIdempotencyPolicy!]!
  }

  extend type Mutation {
    createEventsIdempotencyPolicy(tenantId: String!, code: String!, name: String!): EventsIdempotencyPolicy!
    deleteEventsIdempotencyPolicy(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyPolicyGqlResolvers = {
  Query: {
    getEventsIdempotencyPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
