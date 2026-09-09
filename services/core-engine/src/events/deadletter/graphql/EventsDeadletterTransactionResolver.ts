export const EventsDeadletterTransactionGqlTypeDefs = `
  type EventsDeadletterTransaction {
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
    getEventsDeadletterTransaction(id: ID!): EventsDeadletterTransaction
    listEventsDeadletterTransactions(tenantId: String!, limit: Int): [EventsDeadletterTransaction!]!
  }

  extend type Mutation {
    createEventsDeadletterTransaction(tenantId: String!, code: String!, name: String!): EventsDeadletterTransaction!
    deleteEventsDeadletterTransaction(id: ID!): Boolean!
  }
`;

export const EventsDeadletterTransactionGqlResolvers = {
  Query: {
    getEventsDeadletterTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
