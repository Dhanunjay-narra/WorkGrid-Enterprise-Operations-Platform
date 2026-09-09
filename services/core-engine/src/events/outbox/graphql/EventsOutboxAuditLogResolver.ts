export const EventsOutboxAuditLogGqlTypeDefs = `
  type EventsOutboxAuditLog {
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
    getEventsOutboxAuditLog(id: ID!): EventsOutboxAuditLog
    listEventsOutboxAuditLogs(tenantId: String!, limit: Int): [EventsOutboxAuditLog!]!
  }

  extend type Mutation {
    createEventsOutboxAuditLog(tenantId: String!, code: String!, name: String!): EventsOutboxAuditLog!
    deleteEventsOutboxAuditLog(id: ID!): Boolean!
  }
`;

export const EventsOutboxAuditLogGqlResolvers = {
  Query: {
    getEventsOutboxAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "EventsOutboxAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
