export const DmsExportTransactionGqlTypeDefs = `
  type DmsExportTransaction {
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
    getDmsExportTransaction(id: ID!): DmsExportTransaction
    listDmsExportTransactions(tenantId: String!, limit: Int): [DmsExportTransaction!]!
  }

  extend type Mutation {
    createDmsExportTransaction(tenantId: String!, code: String!, name: String!): DmsExportTransaction!
    deleteDmsExportTransaction(id: ID!): Boolean!
  }
`;

export const DmsExportTransactionGqlResolvers = {
  Query: {
    getDmsExportTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
