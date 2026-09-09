export const ObsSpansAuditLogGqlTypeDefs = `
  type ObsSpansAuditLog {
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
    getObsSpansAuditLog(id: ID!): ObsSpansAuditLog
    listObsSpansAuditLogs(tenantId: String!, limit: Int): [ObsSpansAuditLog!]!
  }

  extend type Mutation {
    createObsSpansAuditLog(tenantId: String!, code: String!, name: String!): ObsSpansAuditLog!
    deleteObsSpansAuditLog(id: ID!): Boolean!
  }
`;

export const ObsSpansAuditLogGqlResolvers = {
  Query: {
    getObsSpansAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
