export const AiEmbeddingsTransactionGqlTypeDefs = `
  type AiEmbeddingsTransaction {
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
    getAiEmbeddingsTransaction(id: ID!): AiEmbeddingsTransaction
    listAiEmbeddingsTransactions(tenantId: String!, limit: Int): [AiEmbeddingsTransaction!]!
  }

  extend type Mutation {
    createAiEmbeddingsTransaction(tenantId: String!, code: String!, name: String!): AiEmbeddingsTransaction!
    deleteAiEmbeddingsTransaction(id: ID!): Boolean!
  }
`;

export const AiEmbeddingsTransactionGqlResolvers = {
  Query: {
    getAiEmbeddingsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiEmbeddingsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
