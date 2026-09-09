export const SupportKnowledgeAuditLogGqlTypeDefs = `
  type SupportKnowledgeAuditLog {
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
    getSupportKnowledgeAuditLog(id: ID!): SupportKnowledgeAuditLog
    listSupportKnowledgeAuditLogs(tenantId: String!, limit: Int): [SupportKnowledgeAuditLog!]!
  }

  extend type Mutation {
    createSupportKnowledgeAuditLog(tenantId: String!, code: String!, name: String!): SupportKnowledgeAuditLog!
    deleteSupportKnowledgeAuditLog(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeAuditLogGqlResolvers = {
  Query: {
    getSupportKnowledgeAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
