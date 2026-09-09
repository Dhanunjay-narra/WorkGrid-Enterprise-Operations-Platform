export const SupportAgentsTransactionGqlTypeDefs = `
  type SupportAgentsTransaction {
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
    getSupportAgentsTransaction(id: ID!): SupportAgentsTransaction
    listSupportAgentsTransactions(tenantId: String!, limit: Int): [SupportAgentsTransaction!]!
  }

  extend type Mutation {
    createSupportAgentsTransaction(tenantId: String!, code: String!, name: String!): SupportAgentsTransaction!
    deleteSupportAgentsTransaction(id: ID!): Boolean!
  }
`;

export const SupportAgentsTransactionGqlResolvers = {
  Query: {
    getSupportAgentsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
