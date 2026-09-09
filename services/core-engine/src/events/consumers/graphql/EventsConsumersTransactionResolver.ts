export const EventsConsumersTransactionGqlTypeDefs = `
  type EventsConsumersTransaction {
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
    getEventsConsumersTransaction(id: ID!): EventsConsumersTransaction
    listEventsConsumersTransactions(tenantId: String!, limit: Int): [EventsConsumersTransaction!]!
  }

  extend type Mutation {
    createEventsConsumersTransaction(tenantId: String!, code: String!, name: String!): EventsConsumersTransaction!
    deleteEventsConsumersTransaction(id: ID!): Boolean!
  }
`;

export const EventsConsumersTransactionGqlResolvers = {
  Query: {
    getEventsConsumersTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
