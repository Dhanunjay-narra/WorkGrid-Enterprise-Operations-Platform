export const IotCommandsAuditLogGqlTypeDefs = `
  type IotCommandsAuditLog {
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
    getIotCommandsAuditLog(id: ID!): IotCommandsAuditLog
    listIotCommandsAuditLogs(tenantId: String!, limit: Int): [IotCommandsAuditLog!]!
  }

  extend type Mutation {
    createIotCommandsAuditLog(tenantId: String!, code: String!, name: String!): IotCommandsAuditLog!
    deleteIotCommandsAuditLog(id: ID!): Boolean!
  }
`;

export const IotCommandsAuditLogGqlResolvers = {
  Query: {
    getIotCommandsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
