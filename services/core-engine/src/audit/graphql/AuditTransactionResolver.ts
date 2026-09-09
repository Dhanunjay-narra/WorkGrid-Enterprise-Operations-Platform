export const AuditTransactionGqlTypeDefs = `
  type AuditTransaction {
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
    getAuditTransaction(id: ID!): AuditTransaction
    listAuditTransactions(tenantId: String!, limit: Int): [AuditTransaction!]!
  }

  extend type Mutation {
    createAuditTransaction(tenantId: String!, code: String!, name: String!): AuditTransaction!
    deleteAuditTransaction(id: ID!): Boolean!
  }
`;

export const AuditTransactionGqlResolvers = {
  Query: {
    getAuditTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
