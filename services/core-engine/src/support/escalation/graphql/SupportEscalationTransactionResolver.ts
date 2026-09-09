export const SupportEscalationTransactionGqlTypeDefs = `
  type SupportEscalationTransaction {
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
    getSupportEscalationTransaction(id: ID!): SupportEscalationTransaction
    listSupportEscalationTransactions(tenantId: String!, limit: Int): [SupportEscalationTransaction!]!
  }

  extend type Mutation {
    createSupportEscalationTransaction(tenantId: String!, code: String!, name: String!): SupportEscalationTransaction!
    deleteSupportEscalationTransaction(id: ID!): Boolean!
  }
`;

export const SupportEscalationTransactionGqlResolvers = {
  Query: {
    getSupportEscalationTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
