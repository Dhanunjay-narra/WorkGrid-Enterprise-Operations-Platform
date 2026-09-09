export const IotThresholdsAuditLogGqlTypeDefs = `
  type IotThresholdsAuditLog {
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
    getIotThresholdsAuditLog(id: ID!): IotThresholdsAuditLog
    listIotThresholdsAuditLogs(tenantId: String!, limit: Int): [IotThresholdsAuditLog!]!
  }

  extend type Mutation {
    createIotThresholdsAuditLog(tenantId: String!, code: String!, name: String!): IotThresholdsAuditLog!
    deleteIotThresholdsAuditLog(id: ID!): Boolean!
  }
`;

export const IotThresholdsAuditLogGqlResolvers = {
  Query: {
    getIotThresholdsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
