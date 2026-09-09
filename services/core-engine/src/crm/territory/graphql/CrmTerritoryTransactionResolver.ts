export const CrmTerritoryTransactionGqlTypeDefs = `
  type CrmTerritoryTransaction {
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
    getCrmTerritoryTransaction(id: ID!): CrmTerritoryTransaction
    listCrmTerritoryTransactions(tenantId: String!, limit: Int): [CrmTerritoryTransaction!]!
  }

  extend type Mutation {
    createCrmTerritoryTransaction(tenantId: String!, code: String!, name: String!): CrmTerritoryTransaction!
    deleteCrmTerritoryTransaction(id: ID!): Boolean!
  }
`;

export const CrmTerritoryTransactionGqlResolvers = {
  Query: {
    getCrmTerritoryTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
