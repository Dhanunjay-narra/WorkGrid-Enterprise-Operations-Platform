export const CommDigestAuditLogGqlTypeDefs = `
  type CommDigestAuditLog {
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
    getCommDigestAuditLog(id: ID!): CommDigestAuditLog
    listCommDigestAuditLogs(tenantId: String!, limit: Int): [CommDigestAuditLog!]!
  }

  extend type Mutation {
    createCommDigestAuditLog(tenantId: String!, code: String!, name: String!): CommDigestAuditLog!
    deleteCommDigestAuditLog(id: ID!): Boolean!
  }
`;

export const CommDigestAuditLogGqlResolvers = {
  Query: {
    getCommDigestAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
