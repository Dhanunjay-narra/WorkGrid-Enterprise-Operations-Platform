export const SecurityAuditLogGqlTypeDefs = `
  type SecurityAuditLog {
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
    getSecurityAuditLog(id: ID!): SecurityAuditLog
    listSecurityAuditLogs(tenantId: String!, limit: Int): [SecurityAuditLog!]!
  }

  extend type Mutation {
    createSecurityAuditLog(tenantId: String!, code: String!, name: String!): SecurityAuditLog!
    deleteSecurityAuditLog(id: ID!): Boolean!
  }
`;

export const SecurityAuditLogGqlResolvers = {
  Query: {
    getSecurityAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
