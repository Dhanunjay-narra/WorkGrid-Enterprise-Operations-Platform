export const EventsPartitionsPayloadGqlTypeDefs = `
  type EventsPartitionsPayload {
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
    getEventsPartitionsPayload(id: ID!): EventsPartitionsPayload
    listEventsPartitionsPayloads(tenantId: String!, limit: Int): [EventsPartitionsPayload!]!
  }

  extend type Mutation {
    createEventsPartitionsPayload(tenantId: String!, code: String!, name: String!): EventsPartitionsPayload!
    deleteEventsPartitionsPayload(id: ID!): Boolean!
  }
`;

export const EventsPartitionsPayloadGqlResolvers = {
  Query: {
    getEventsPartitionsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsPartitionsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
