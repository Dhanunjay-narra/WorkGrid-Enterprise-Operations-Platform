export const EventsIdempotencyTransactionGqlTypeDefs = `
  type EventsIdempotencyTransaction {
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
    getEventsIdempotencyTransaction(id: ID!): EventsIdempotencyTransaction
    listEventsIdempotencyTransactions(tenantId: String!, limit: Int): [EventsIdempotencyTransaction!]!
  }

  extend type Mutation {
    createEventsIdempotencyTransaction(tenantId: String!, code: String!, name: String!): EventsIdempotencyTransaction!
    deleteEventsIdempotencyTransaction(id: ID!): Boolean!
  }
`;

export const EventsIdempotencyTransactionGqlResolvers = {
  Query: {
    getEventsIdempotencyTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsIdempotencyTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
