export const DmsSignaturesTransactionGqlTypeDefs = `
  type DmsSignaturesTransaction {
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
    getDmsSignaturesTransaction(id: ID!): DmsSignaturesTransaction
    listDmsSignaturesTransactions(tenantId: String!, limit: Int): [DmsSignaturesTransaction!]!
  }

  extend type Mutation {
    createDmsSignaturesTransaction(tenantId: String!, code: String!, name: String!): DmsSignaturesTransaction!
    deleteDmsSignaturesTransaction(id: ID!): Boolean!
  }
`;

export const DmsSignaturesTransactionGqlResolvers = {
  Query: {
    getDmsSignaturesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
