export const EventsSchemaTransactionGqlTypeDefs = `
  type EventsSchemaTransaction {
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
    getEventsSchemaTransaction(id: ID!): EventsSchemaTransaction
    listEventsSchemaTransactions(tenantId: String!, limit: Int): [EventsSchemaTransaction!]!
  }

  extend type Mutation {
    createEventsSchemaTransaction(tenantId: String!, code: String!, name: String!): EventsSchemaTransaction!
    deleteEventsSchemaTransaction(id: ID!): Boolean!
  }
`;

export const EventsSchemaTransactionGqlResolvers = {
  Query: {
    getEventsSchemaTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
