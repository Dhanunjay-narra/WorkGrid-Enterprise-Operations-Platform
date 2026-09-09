export const EventsConsumersRecordGqlTypeDefs = `
  type EventsConsumersRecord {
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
    getEventsConsumersRecord(id: ID!): EventsConsumersRecord
    listEventsConsumersRecords(tenantId: String!, limit: Int): [EventsConsumersRecord!]!
  }

  extend type Mutation {
    createEventsConsumersRecord(tenantId: String!, code: String!, name: String!): EventsConsumersRecord!
    deleteEventsConsumersRecord(id: ID!): Boolean!
  }
`;

export const EventsConsumersRecordGqlResolvers = {
  Query: {
    getEventsConsumersRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsConsumersRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
