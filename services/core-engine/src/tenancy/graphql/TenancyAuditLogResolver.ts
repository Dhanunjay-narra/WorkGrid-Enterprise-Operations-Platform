export const TenancyAuditLogGqlTypeDefs = `
  type TenancyAuditLog {
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
    getTenancyAuditLog(id: ID!): TenancyAuditLog
    listTenancyAuditLogs(tenantId: String!, limit: Int): [TenancyAuditLog!]!
  }

  extend type Mutation {
    createTenancyAuditLog(tenantId: String!, code: String!, name: String!): TenancyAuditLog!
    deleteTenancyAuditLog(id: ID!): Boolean!
  }
`;

export const TenancyAuditLogGqlResolvers = {
  Query: {
    getTenancyAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
