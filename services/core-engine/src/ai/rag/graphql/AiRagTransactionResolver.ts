export const AiRagTransactionGqlTypeDefs = `
  type AiRagTransaction {
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
    getAiRagTransaction(id: ID!): AiRagTransaction
    listAiRagTransactions(tenantId: String!, limit: Int): [AiRagTransaction!]!
  }

  extend type Mutation {
    createAiRagTransaction(tenantId: String!, code: String!, name: String!): AiRagTransaction!
    deleteAiRagTransaction(id: ID!): Boolean!
  }
`;

export const AiRagTransactionGqlResolvers = {
  Query: {
    getAiRagTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
