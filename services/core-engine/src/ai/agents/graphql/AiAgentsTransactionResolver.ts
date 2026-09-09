export const AiAgentsTransactionGqlTypeDefs = `
  type AiAgentsTransaction {
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
    getAiAgentsTransaction(id: ID!): AiAgentsTransaction
    listAiAgentsTransactions(tenantId: String!, limit: Int): [AiAgentsTransaction!]!
  }

  extend type Mutation {
    createAiAgentsTransaction(tenantId: String!, code: String!, name: String!): AiAgentsTransaction!
    deleteAiAgentsTransaction(id: ID!): Boolean!
  }
`;

export const AiAgentsTransactionGqlResolvers = {
  Query: {
    getAiAgentsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
