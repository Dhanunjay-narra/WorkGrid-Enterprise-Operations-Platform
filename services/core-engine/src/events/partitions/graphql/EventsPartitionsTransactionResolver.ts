export const EventsPartitionsTransactionGqlTypeDefs = `
  type EventsPartitionsTransaction {
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
    getEventsPartitionsTransaction(id: ID!): EventsPartitionsTransaction
    listEventsPartitionsTransactions(tenantId: String!, limit: Int): [EventsPartitionsTransaction!]!
  }

  extend type Mutation {
    createEventsPartitionsTransaction(tenantId: String!, code: String!, name: String!): EventsPartitionsTransaction!
    deleteEventsPartitionsTransaction(id: ID!): Boolean!
  }
`;

export const EventsPartitionsTransactionGqlResolvers = {
  Query: {
    getEventsPartitionsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
