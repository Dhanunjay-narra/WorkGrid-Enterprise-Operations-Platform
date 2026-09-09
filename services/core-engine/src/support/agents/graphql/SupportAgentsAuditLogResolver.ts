export const SupportAgentsAuditLogGqlTypeDefs = `
  type SupportAgentsAuditLog {
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
    getSupportAgentsAuditLog(id: ID!): SupportAgentsAuditLog
    listSupportAgentsAuditLogs(tenantId: String!, limit: Int): [SupportAgentsAuditLog!]!
  }

  extend type Mutation {
    createSupportAgentsAuditLog(tenantId: String!, code: String!, name: String!): SupportAgentsAuditLog!
    deleteSupportAgentsAuditLog(id: ID!): Boolean!
  }
`;

export const SupportAgentsAuditLogGqlResolvers = {
  Query: {
    getSupportAgentsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
