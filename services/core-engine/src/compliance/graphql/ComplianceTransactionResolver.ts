export const ComplianceTransactionGqlTypeDefs = `
  type ComplianceTransaction {
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
    getComplianceTransaction(id: ID!): ComplianceTransaction
    listComplianceTransactions(tenantId: String!, limit: Int): [ComplianceTransaction!]!
  }

  extend type Mutation {
    createComplianceTransaction(tenantId: String!, code: String!, name: String!): ComplianceTransaction!
    deleteComplianceTransaction(id: ID!): Boolean!
  }
`;

export const ComplianceTransactionGqlResolvers = {
  Query: {
    getComplianceTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
