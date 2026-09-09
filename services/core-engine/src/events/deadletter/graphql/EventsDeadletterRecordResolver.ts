export const EventsDeadletterRecordGqlTypeDefs = `
  type EventsDeadletterRecord {
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
    getEventsDeadletterRecord(id: ID!): EventsDeadletterRecord
    listEventsDeadletterRecords(tenantId: String!, limit: Int): [EventsDeadletterRecord!]!
  }

  extend type Mutation {
    createEventsDeadletterRecord(tenantId: String!, code: String!, name: String!): EventsDeadletterRecord!
    deleteEventsDeadletterRecord(id: ID!): Boolean!
  }
`;

export const EventsDeadletterRecordGqlResolvers = {
  Query: {
    getEventsDeadletterRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
