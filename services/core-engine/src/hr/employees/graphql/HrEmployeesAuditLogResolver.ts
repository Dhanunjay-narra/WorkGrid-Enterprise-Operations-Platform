export const HrEmployeesAuditLogGqlTypeDefs = `
  type HrEmployeesAuditLog {
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
    getHrEmployeesAuditLog(id: ID!): HrEmployeesAuditLog
    listHrEmployeesAuditLogs(tenantId: String!, limit: Int): [HrEmployeesAuditLog!]!
  }

  extend type Mutation {
    createHrEmployeesAuditLog(tenantId: String!, code: String!, name: String!): HrEmployeesAuditLog!
    deleteHrEmployeesAuditLog(id: ID!): Boolean!
  }
`;

export const HrEmployeesAuditLogGqlResolvers = {
  Query: {
    getHrEmployeesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
