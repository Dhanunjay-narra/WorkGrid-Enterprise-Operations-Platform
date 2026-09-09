export const DmsFoldersTransactionGqlTypeDefs = `
  type DmsFoldersTransaction {
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
    getDmsFoldersTransaction(id: ID!): DmsFoldersTransaction
    listDmsFoldersTransactions(tenantId: String!, limit: Int): [DmsFoldersTransaction!]!
  }

  extend type Mutation {
    createDmsFoldersTransaction(tenantId: String!, code: String!, name: String!): DmsFoldersTransaction!
    deleteDmsFoldersTransaction(id: ID!): Boolean!
  }
`;

export const DmsFoldersTransactionGqlResolvers = {
  Query: {
    getDmsFoldersTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
