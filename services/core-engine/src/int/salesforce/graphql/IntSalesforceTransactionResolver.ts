export const IntSalesforceTransactionGqlTypeDefs = `
  type IntSalesforceTransaction {
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
    getIntSalesforceTransaction(id: ID!): IntSalesforceTransaction
    listIntSalesforceTransactions(tenantId: String!, limit: Int): [IntSalesforceTransaction!]!
  }

  extend type Mutation {
    createIntSalesforceTransaction(tenantId: String!, code: String!, name: String!): IntSalesforceTransaction!
    deleteIntSalesforceTransaction(id: ID!): Boolean!
  }
`;

export const IntSalesforceTransactionGqlResolvers = {
  Query: {
    getIntSalesforceTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
