export const EventsDeadletterPayloadGqlTypeDefs = `
  type EventsDeadletterPayload {
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
    getEventsDeadletterPayload(id: ID!): EventsDeadletterPayload
    listEventsDeadletterPayloads(tenantId: String!, limit: Int): [EventsDeadletterPayload!]!
  }

  extend type Mutation {
    createEventsDeadletterPayload(tenantId: String!, code: String!, name: String!): EventsDeadletterPayload!
    deleteEventsDeadletterPayload(id: ID!): Boolean!
  }
`;

export const EventsDeadletterPayloadGqlResolvers = {
  Query: {
    getEventsDeadletterPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsDeadletterPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
