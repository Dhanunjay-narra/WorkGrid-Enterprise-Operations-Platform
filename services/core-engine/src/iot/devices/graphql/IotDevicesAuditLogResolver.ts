export const IotDevicesAuditLogGqlTypeDefs = `
  type IotDevicesAuditLog {
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
    getIotDevicesAuditLog(id: ID!): IotDevicesAuditLog
    listIotDevicesAuditLogs(tenantId: String!, limit: Int): [IotDevicesAuditLog!]!
  }

  extend type Mutation {
    createIotDevicesAuditLog(tenantId: String!, code: String!, name: String!): IotDevicesAuditLog!
    deleteIotDevicesAuditLog(id: ID!): Boolean!
  }
`;

export const IotDevicesAuditLogGqlResolvers = {
  Query: {
    getIotDevicesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
