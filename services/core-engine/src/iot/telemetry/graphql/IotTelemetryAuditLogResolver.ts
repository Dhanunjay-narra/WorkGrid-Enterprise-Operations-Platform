export const IotTelemetryAuditLogGqlTypeDefs = `
  type IotTelemetryAuditLog {
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
    getIotTelemetryAuditLog(id: ID!): IotTelemetryAuditLog
    listIotTelemetryAuditLogs(tenantId: String!, limit: Int): [IotTelemetryAuditLog!]!
  }

  extend type Mutation {
    createIotTelemetryAuditLog(tenantId: String!, code: String!, name: String!): IotTelemetryAuditLog!
    deleteIotTelemetryAuditLog(id: ID!): Boolean!
  }
`;

export const IotTelemetryAuditLogGqlResolvers = {
  Query: {
    getIotTelemetryAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
