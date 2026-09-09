export const EventsReplayRecordGqlTypeDefs = `
  type EventsReplayRecord {
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
    getEventsReplayRecord(id: ID!): EventsReplayRecord
    listEventsReplayRecords(tenantId: String!, limit: Int): [EventsReplayRecord!]!
  }

  extend type Mutation {
    createEventsReplayRecord(tenantId: String!, code: String!, name: String!): EventsReplayRecord!
    deleteEventsReplayRecord(id: ID!): Boolean!
  }
`;

export const EventsReplayRecordGqlResolvers = {
  Query: {
    getEventsReplayRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsReplayRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
