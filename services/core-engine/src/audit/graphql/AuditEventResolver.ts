export const AuditEventGqlTypeDefs = `
  type AuditEvent {
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
    getAuditEvent(id: ID!): AuditEvent
    listAuditEvents(tenantId: String!, limit: Int): [AuditEvent!]!
  }

  extend type Mutation {
    createAuditEvent(tenantId: String!, code: String!, name: String!): AuditEvent!
    deleteAuditEvent(id: ID!): Boolean!
  }
`;

export const AuditEventGqlResolvers = {
  Query: {
    getAuditEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
