export const AiMemoryTransactionGqlTypeDefs = `
  type AiMemoryTransaction {
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
    getAiMemoryTransaction(id: ID!): AiMemoryTransaction
    listAiMemoryTransactions(tenantId: String!, limit: Int): [AiMemoryTransaction!]!
  }

  extend type Mutation {
    createAiMemoryTransaction(tenantId: String!, code: String!, name: String!): AiMemoryTransaction!
    deleteAiMemoryTransaction(id: ID!): Boolean!
  }
`;

export const AiMemoryTransactionGqlResolvers = {
  Query: {
    getAiMemoryTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
