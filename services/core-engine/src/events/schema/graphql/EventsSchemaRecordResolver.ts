export const EventsSchemaRecordGqlTypeDefs = `
  type EventsSchemaRecord {
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
    getEventsSchemaRecord(id: ID!): EventsSchemaRecord
    listEventsSchemaRecords(tenantId: String!, limit: Int): [EventsSchemaRecord!]!
  }

  extend type Mutation {
    createEventsSchemaRecord(tenantId: String!, code: String!, name: String!): EventsSchemaRecord!
    deleteEventsSchemaRecord(id: ID!): Boolean!
  }
`;

export const EventsSchemaRecordGqlResolvers = {
  Query: {
    getEventsSchemaRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsSchemaRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
