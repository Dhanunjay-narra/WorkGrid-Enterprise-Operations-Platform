export const EventsOutboxTransactionGqlTypeDefs = `
  type EventsOutboxTransaction {
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
    getEventsOutboxTransaction(id: ID!): EventsOutboxTransaction
    listEventsOutboxTransactions(tenantId: String!, limit: Int): [EventsOutboxTransaction!]!
  }

  extend type Mutation {
    createEventsOutboxTransaction(tenantId: String!, code: String!, name: String!): EventsOutboxTransaction!
    deleteEventsOutboxTransaction(id: ID!): Boolean!
  }
`;

export const EventsOutboxTransactionGqlResolvers = {
  Query: {
    getEventsOutboxTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
