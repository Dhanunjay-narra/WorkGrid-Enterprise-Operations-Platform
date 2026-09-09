export const RbacTransactionGqlTypeDefs = `
  type RbacTransaction {
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
    getRbacTransaction(id: ID!): RbacTransaction
    listRbacTransactions(tenantId: String!, limit: Int): [RbacTransaction!]!
  }

  extend type Mutation {
    createRbacTransaction(tenantId: String!, code: String!, name: String!): RbacTransaction!
    deleteRbacTransaction(id: ID!): Boolean!
  }
`;

export const RbacTransactionGqlResolvers = {
  Query: {
    getRbacTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
