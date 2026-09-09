export const BiKpisAuditLogGqlTypeDefs = `
  type BiKpisAuditLog {
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
    getBiKpisAuditLog(id: ID!): BiKpisAuditLog
    listBiKpisAuditLogs(tenantId: String!, limit: Int): [BiKpisAuditLog!]!
  }

  extend type Mutation {
    createBiKpisAuditLog(tenantId: String!, code: String!, name: String!): BiKpisAuditLog!
    deleteBiKpisAuditLog(id: ID!): Boolean!
  }
`;

export const BiKpisAuditLogGqlResolvers = {
  Query: {
    getBiKpisAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
