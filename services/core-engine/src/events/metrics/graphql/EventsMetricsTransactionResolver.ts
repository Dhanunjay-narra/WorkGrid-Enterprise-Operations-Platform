export const EventsMetricsTransactionGqlTypeDefs = `
  type EventsMetricsTransaction {
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
    getEventsMetricsTransaction(id: ID!): EventsMetricsTransaction
    listEventsMetricsTransactions(tenantId: String!, limit: Int): [EventsMetricsTransaction!]!
  }

  extend type Mutation {
    createEventsMetricsTransaction(tenantId: String!, code: String!, name: String!): EventsMetricsTransaction!
    deleteEventsMetricsTransaction(id: ID!): Boolean!
  }
`;

export const EventsMetricsTransactionGqlResolvers = {
  Query: {
    getEventsMetricsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsMetricsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
