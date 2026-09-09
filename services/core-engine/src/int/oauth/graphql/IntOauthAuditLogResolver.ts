export const IntOauthAuditLogGqlTypeDefs = `
  type IntOauthAuditLog {
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
    getIntOauthAuditLog(id: ID!): IntOauthAuditLog
    listIntOauthAuditLogs(tenantId: String!, limit: Int): [IntOauthAuditLog!]!
  }

  extend type Mutation {
    createIntOauthAuditLog(tenantId: String!, code: String!, name: String!): IntOauthAuditLog!
    deleteIntOauthAuditLog(id: ID!): Boolean!
  }
`;

export const IntOauthAuditLogGqlResolvers = {
  Query: {
    getIntOauthAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
