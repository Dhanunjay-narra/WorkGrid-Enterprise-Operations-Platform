export const CrmAccountsTransactionGqlTypeDefs = `
  type CrmAccountsTransaction {
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
    getCrmAccountsTransaction(id: ID!): CrmAccountsTransaction
    listCrmAccountsTransactions(tenantId: String!, limit: Int): [CrmAccountsTransaction!]!
  }

  extend type Mutation {
    createCrmAccountsTransaction(tenantId: String!, code: String!, name: String!): CrmAccountsTransaction!
    deleteCrmAccountsTransaction(id: ID!): Boolean!
  }
`;

export const CrmAccountsTransactionGqlResolvers = {
  Query: {
    getCrmAccountsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
