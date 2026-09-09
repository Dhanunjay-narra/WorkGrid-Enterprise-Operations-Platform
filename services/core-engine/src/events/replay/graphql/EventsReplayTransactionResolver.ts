export const EventsReplayTransactionGqlTypeDefs = `
  type EventsReplayTransaction {
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
    getEventsReplayTransaction(id: ID!): EventsReplayTransaction
    listEventsReplayTransactions(tenantId: String!, limit: Int): [EventsReplayTransaction!]!
  }

  extend type Mutation {
    createEventsReplayTransaction(tenantId: String!, code: String!, name: String!): EventsReplayTransaction!
    deleteEventsReplayTransaction(id: ID!): Boolean!
  }
`;

export const EventsReplayTransactionGqlResolvers = {
  Query: {
    getEventsReplayTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
