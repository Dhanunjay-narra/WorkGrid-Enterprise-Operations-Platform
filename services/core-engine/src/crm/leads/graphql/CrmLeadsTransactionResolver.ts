export const CrmLeadsTransactionGqlTypeDefs = `
  type CrmLeadsTransaction {
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
    getCrmLeadsTransaction(id: ID!): CrmLeadsTransaction
    listCrmLeadsTransactions(tenantId: String!, limit: Int): [CrmLeadsTransaction!]!
  }

  extend type Mutation {
    createCrmLeadsTransaction(tenantId: String!, code: String!, name: String!): CrmLeadsTransaction!
    deleteCrmLeadsTransaction(id: ID!): Boolean!
  }
`;

export const CrmLeadsTransactionGqlResolvers = {
  Query: {
    getCrmLeadsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
