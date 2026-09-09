export const DmsOcrAuditLogGqlTypeDefs = `
  type DmsOcrAuditLog {
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
    getDmsOcrAuditLog(id: ID!): DmsOcrAuditLog
    listDmsOcrAuditLogs(tenantId: String!, limit: Int): [DmsOcrAuditLog!]!
  }

  extend type Mutation {
    createDmsOcrAuditLog(tenantId: String!, code: String!, name: String!): DmsOcrAuditLog!
    deleteDmsOcrAuditLog(id: ID!): Boolean!
  }
`;

export const DmsOcrAuditLogGqlResolvers = {
  Query: {
    getDmsOcrAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
