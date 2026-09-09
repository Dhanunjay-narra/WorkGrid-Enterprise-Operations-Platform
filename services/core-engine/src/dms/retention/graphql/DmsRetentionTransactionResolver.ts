export const DmsRetentionTransactionGqlTypeDefs = `
  type DmsRetentionTransaction {
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
    getDmsRetentionTransaction(id: ID!): DmsRetentionTransaction
    listDmsRetentionTransactions(tenantId: String!, limit: Int): [DmsRetentionTransaction!]!
  }

  extend type Mutation {
    createDmsRetentionTransaction(tenantId: String!, code: String!, name: String!): DmsRetentionTransaction!
    deleteDmsRetentionTransaction(id: ID!): Boolean!
  }
`;

export const DmsRetentionTransactionGqlResolvers = {
  Query: {
    getDmsRetentionTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
