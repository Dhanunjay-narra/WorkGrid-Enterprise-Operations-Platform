export const SupportTicketsTransactionGqlTypeDefs = `
  type SupportTicketsTransaction {
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
    getSupportTicketsTransaction(id: ID!): SupportTicketsTransaction
    listSupportTicketsTransactions(tenantId: String!, limit: Int): [SupportTicketsTransaction!]!
  }

  extend type Mutation {
    createSupportTicketsTransaction(tenantId: String!, code: String!, name: String!): SupportTicketsTransaction!
    deleteSupportTicketsTransaction(id: ID!): Boolean!
  }
`;

export const SupportTicketsTransactionGqlResolvers = {
  Query: {
    getSupportTicketsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
