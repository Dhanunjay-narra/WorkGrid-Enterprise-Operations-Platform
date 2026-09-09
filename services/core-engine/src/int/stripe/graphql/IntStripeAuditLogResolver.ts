export const IntStripeAuditLogGqlTypeDefs = `
  type IntStripeAuditLog {
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
    getIntStripeAuditLog(id: ID!): IntStripeAuditLog
    listIntStripeAuditLogs(tenantId: String!, limit: Int): [IntStripeAuditLog!]!
  }

  extend type Mutation {
    createIntStripeAuditLog(tenantId: String!, code: String!, name: String!): IntStripeAuditLog!
    deleteIntStripeAuditLog(id: ID!): Boolean!
  }
`;

export const IntStripeAuditLogGqlResolvers = {
  Query: {
    getIntStripeAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
