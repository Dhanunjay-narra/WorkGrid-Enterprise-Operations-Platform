export const IotLocationsAuditLogGqlTypeDefs = `
  type IotLocationsAuditLog {
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
    getIotLocationsAuditLog(id: ID!): IotLocationsAuditLog
    listIotLocationsAuditLogs(tenantId: String!, limit: Int): [IotLocationsAuditLog!]!
  }

  extend type Mutation {
    createIotLocationsAuditLog(tenantId: String!, code: String!, name: String!): IotLocationsAuditLog!
    deleteIotLocationsAuditLog(id: ID!): Boolean!
  }
`;

export const IotLocationsAuditLogGqlResolvers = {
  Query: {
    getIotLocationsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
