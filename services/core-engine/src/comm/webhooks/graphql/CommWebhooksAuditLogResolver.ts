export const CommWebhooksAuditLogGqlTypeDefs = `
  type CommWebhooksAuditLog {
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
    getCommWebhooksAuditLog(id: ID!): CommWebhooksAuditLog
    listCommWebhooksAuditLogs(tenantId: String!, limit: Int): [CommWebhooksAuditLog!]!
  }

  extend type Mutation {
    createCommWebhooksAuditLog(tenantId: String!, code: String!, name: String!): CommWebhooksAuditLog!
    deleteCommWebhooksAuditLog(id: ID!): Boolean!
  }
`;

export const CommWebhooksAuditLogGqlResolvers = {
  Query: {
    getCommWebhooksAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
