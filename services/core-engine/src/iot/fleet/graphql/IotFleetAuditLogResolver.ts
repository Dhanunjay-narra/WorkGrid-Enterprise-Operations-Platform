export const IotFleetAuditLogGqlTypeDefs = `
  type IotFleetAuditLog {
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
    getIotFleetAuditLog(id: ID!): IotFleetAuditLog
    listIotFleetAuditLogs(tenantId: String!, limit: Int): [IotFleetAuditLog!]!
  }

  extend type Mutation {
    createIotFleetAuditLog(tenantId: String!, code: String!, name: String!): IotFleetAuditLog!
    deleteIotFleetAuditLog(id: ID!): Boolean!
  }
`;

export const IotFleetAuditLogGqlResolvers = {
  Query: {
    getIotFleetAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
