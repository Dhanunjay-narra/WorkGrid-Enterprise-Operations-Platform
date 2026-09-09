export const ProjectCapacityAuditLogGqlTypeDefs = `
  type ProjectCapacityAuditLog {
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
    getProjectCapacityAuditLog(id: ID!): ProjectCapacityAuditLog
    listProjectCapacityAuditLogs(tenantId: String!, limit: Int): [ProjectCapacityAuditLog!]!
  }

  extend type Mutation {
    createProjectCapacityAuditLog(tenantId: String!, code: String!, name: String!): ProjectCapacityAuditLog!
    deleteProjectCapacityAuditLog(id: ID!): Boolean!
  }
`;

export const ProjectCapacityAuditLogGqlResolvers = {
  Query: {
    getProjectCapacityAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
