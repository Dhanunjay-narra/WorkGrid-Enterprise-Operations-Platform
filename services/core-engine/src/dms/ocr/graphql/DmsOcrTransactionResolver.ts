export const DmsOcrTransactionGqlTypeDefs = `
  type DmsOcrTransaction {
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
    getDmsOcrTransaction(id: ID!): DmsOcrTransaction
    listDmsOcrTransactions(tenantId: String!, limit: Int): [DmsOcrTransaction!]!
  }

  extend type Mutation {
    createDmsOcrTransaction(tenantId: String!, code: String!, name: String!): DmsOcrTransaction!
    deleteDmsOcrTransaction(id: ID!): Boolean!
  }
`;

export const DmsOcrTransactionGqlResolvers = {
  Query: {
    getDmsOcrTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
