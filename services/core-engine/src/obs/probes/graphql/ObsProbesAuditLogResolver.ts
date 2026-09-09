export const ObsProbesAuditLogGqlTypeDefs = `
  type ObsProbesAuditLog {
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
    getObsProbesAuditLog(id: ID!): ObsProbesAuditLog
    listObsProbesAuditLogs(tenantId: String!, limit: Int): [ObsProbesAuditLog!]!
  }

  extend type Mutation {
    createObsProbesAuditLog(tenantId: String!, code: String!, name: String!): ObsProbesAuditLog!
    deleteObsProbesAuditLog(id: ID!): Boolean!
  }
`;

export const ObsProbesAuditLogGqlResolvers = {
  Query: {
    getObsProbesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
