export const FinanceExpensesAuditLogGqlTypeDefs = `
  type FinanceExpensesAuditLog {
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
    getFinanceExpensesAuditLog(id: ID!): FinanceExpensesAuditLog
    listFinanceExpensesAuditLogs(tenantId: String!, limit: Int): [FinanceExpensesAuditLog!]!
  }

  extend type Mutation {
    createFinanceExpensesAuditLog(tenantId: String!, code: String!, name: String!): FinanceExpensesAuditLog!
    deleteFinanceExpensesAuditLog(id: ID!): Boolean!
  }
`;

export const FinanceExpensesAuditLogGqlResolvers = {
  Query: {
    getFinanceExpensesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
