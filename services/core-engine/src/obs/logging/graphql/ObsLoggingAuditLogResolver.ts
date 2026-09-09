export const ObsLoggingAuditLogGqlTypeDefs = `
  type ObsLoggingAuditLog {
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
    getObsLoggingAuditLog(id: ID!): ObsLoggingAuditLog
    listObsLoggingAuditLogs(tenantId: String!, limit: Int): [ObsLoggingAuditLog!]!
  }

  extend type Mutation {
    createObsLoggingAuditLog(tenantId: String!, code: String!, name: String!): ObsLoggingAuditLog!
    deleteObsLoggingAuditLog(id: ID!): Boolean!
  }
`;

export const ObsLoggingAuditLogGqlResolvers = {
  Query: {
    getObsLoggingAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
