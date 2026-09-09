export const AiPromptsTransactionGqlTypeDefs = `
  type AiPromptsTransaction {
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
    getAiPromptsTransaction(id: ID!): AiPromptsTransaction
    listAiPromptsTransactions(tenantId: String!, limit: Int): [AiPromptsTransaction!]!
  }

  extend type Mutation {
    createAiPromptsTransaction(tenantId: String!, code: String!, name: String!): AiPromptsTransaction!
    deleteAiPromptsTransaction(id: ID!): Boolean!
  }
`;

export const AiPromptsTransactionGqlResolvers = {
  Query: {
    getAiPromptsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
