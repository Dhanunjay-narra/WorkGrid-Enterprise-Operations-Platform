export const DmsFilesTransactionGqlTypeDefs = `
  type DmsFilesTransaction {
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
    getDmsFilesTransaction(id: ID!): DmsFilesTransaction
    listDmsFilesTransactions(tenantId: String!, limit: Int): [DmsFilesTransaction!]!
  }

  extend type Mutation {
    createDmsFilesTransaction(tenantId: String!, code: String!, name: String!): DmsFilesTransaction!
    deleteDmsFilesTransaction(id: ID!): Boolean!
  }
`;

export const DmsFilesTransactionGqlResolvers = {
  Query: {
    getDmsFilesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
