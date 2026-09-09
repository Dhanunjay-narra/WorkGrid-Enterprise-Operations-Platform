export const EventsOutboxRecordGqlTypeDefs = `
  type EventsOutboxRecord {
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
    getEventsOutboxRecord(id: ID!): EventsOutboxRecord
    listEventsOutboxRecords(tenantId: String!, limit: Int): [EventsOutboxRecord!]!
  }

  extend type Mutation {
    createEventsOutboxRecord(tenantId: String!, code: String!, name: String!): EventsOutboxRecord!
    deleteEventsOutboxRecord(id: ID!): Boolean!
  }
`;

export const EventsOutboxRecordGqlResolvers = {
  Query: {
    getEventsOutboxRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
