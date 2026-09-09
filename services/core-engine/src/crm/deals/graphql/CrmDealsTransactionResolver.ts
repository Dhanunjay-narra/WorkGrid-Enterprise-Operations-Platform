export const CrmDealsTransactionGqlTypeDefs = `
  type CrmDealsTransaction {
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
    getCrmDealsTransaction(id: ID!): CrmDealsTransaction
    listCrmDealsTransactions(tenantId: String!, limit: Int): [CrmDealsTransaction!]!
  }

  extend type Mutation {
    createCrmDealsTransaction(tenantId: String!, code: String!, name: String!): CrmDealsTransaction!
    deleteCrmDealsTransaction(id: ID!): Boolean!
  }
`;

export const CrmDealsTransactionGqlResolvers = {
  Query: {
    getCrmDealsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
