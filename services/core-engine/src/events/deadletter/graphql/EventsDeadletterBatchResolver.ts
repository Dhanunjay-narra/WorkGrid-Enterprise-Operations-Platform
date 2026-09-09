export const EventsDeadletterBatchGqlTypeDefs = `
  type EventsDeadletterBatch {
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
    getEventsDeadletterBatch(id: ID!): EventsDeadletterBatch
    listEventsDeadletterBatchs(tenantId: String!, limit: Int): [EventsDeadletterBatch!]!
  }

  extend type Mutation {
    createEventsDeadletterBatch(tenantId: String!, code: String!, name: String!): EventsDeadletterBatch!
    deleteEventsDeadletterBatch(id: ID!): Boolean!
  }
`;

export const EventsDeadletterBatchGqlResolvers = {
  Query: {
    getEventsDeadletterBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
