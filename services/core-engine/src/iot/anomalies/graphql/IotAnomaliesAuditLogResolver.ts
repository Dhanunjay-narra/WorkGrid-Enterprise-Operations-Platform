export const IotAnomaliesAuditLogGqlTypeDefs = `
  type IotAnomaliesAuditLog {
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
    getIotAnomaliesAuditLog(id: ID!): IotAnomaliesAuditLog
    listIotAnomaliesAuditLogs(tenantId: String!, limit: Int): [IotAnomaliesAuditLog!]!
  }

  extend type Mutation {
    createIotAnomaliesAuditLog(tenantId: String!, code: String!, name: String!): IotAnomaliesAuditLog!
    deleteIotAnomaliesAuditLog(id: ID!): Boolean!
  }
`;

export const IotAnomaliesAuditLogGqlResolvers = {
  Query: {
    getIotAnomaliesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
