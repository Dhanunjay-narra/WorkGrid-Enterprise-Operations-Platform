export const CrmPipelineAuditLogGqlTypeDefs = `
  type CrmPipelineAuditLog {
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
    getCrmPipelineAuditLog(id: ID!): CrmPipelineAuditLog
    listCrmPipelineAuditLogs(tenantId: String!, limit: Int): [CrmPipelineAuditLog!]!
  }

  extend type Mutation {
    createCrmPipelineAuditLog(tenantId: String!, code: String!, name: String!): CrmPipelineAuditLog!
    deleteCrmPipelineAuditLog(id: ID!): Boolean!
  }
`;

export const CrmPipelineAuditLogGqlResolvers = {
  Query: {
    getCrmPipelineAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
