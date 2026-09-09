export const FinanceTaxesAuditLogGqlTypeDefs = `
  type FinanceTaxesAuditLog {
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
    getFinanceTaxesAuditLog(id: ID!): FinanceTaxesAuditLog
    listFinanceTaxesAuditLogs(tenantId: String!, limit: Int): [FinanceTaxesAuditLog!]!
  }

  extend type Mutation {
    createFinanceTaxesAuditLog(tenantId: String!, code: String!, name: String!): FinanceTaxesAuditLog!
    deleteFinanceTaxesAuditLog(id: ID!): Boolean!
  }
`;

export const FinanceTaxesAuditLogGqlResolvers = {
  Query: {
    getFinanceTaxesAuditLog: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesAuditLog", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
