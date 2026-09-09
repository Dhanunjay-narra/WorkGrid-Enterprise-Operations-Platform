export const SupportKnowledgeTransactionGqlTypeDefs = `
  type SupportKnowledgeTransaction {
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
    getSupportKnowledgeTransaction(id: ID!): SupportKnowledgeTransaction
    listSupportKnowledgeTransactions(tenantId: String!, limit: Int): [SupportKnowledgeTransaction!]!
  }

  extend type Mutation {
    createSupportKnowledgeTransaction(tenantId: String!, code: String!, name: String!): SupportKnowledgeTransaction!
    deleteSupportKnowledgeTransaction(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeTransactionGqlResolvers = {
  Query: {
    getSupportKnowledgeTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
