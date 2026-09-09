export const AiGatewayTransactionGqlTypeDefs = `
  type AiGatewayTransaction {
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
    getAiGatewayTransaction(id: ID!): AiGatewayTransaction
    listAiGatewayTransactions(tenantId: String!, limit: Int): [AiGatewayTransaction!]!
  }

  extend type Mutation {
    createAiGatewayTransaction(tenantId: String!, code: String!, name: String!): AiGatewayTransaction!
    deleteAiGatewayTransaction(id: ID!): Boolean!
  }
`;

export const AiGatewayTransactionGqlResolvers = {
  Query: {
    getAiGatewayTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
