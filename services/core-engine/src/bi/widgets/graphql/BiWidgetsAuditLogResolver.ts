export const BiWidgetsAuditLogGqlTypeDefs = `
  type BiWidgetsAuditLog {
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
    getBiWidgetsAuditLog(id: ID!): BiWidgetsAuditLog
    listBiWidgetsAuditLogs(tenantId: String!, limit: Int): [BiWidgetsAuditLog!]!
  }

  extend type Mutation {
    createBiWidgetsAuditLog(tenantId: String!, code: String!, name: String!): BiWidgetsAuditLog!
    deleteBiWidgetsAuditLog(id: ID!): Boolean!
  }
`;

export const BiWidgetsAuditLogGqlResolvers = {
  Query: {
    getBiWidgetsAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
