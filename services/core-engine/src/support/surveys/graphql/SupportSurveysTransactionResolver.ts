export const SupportSurveysTransactionGqlTypeDefs = `
  type SupportSurveysTransaction {
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
    getSupportSurveysTransaction(id: ID!): SupportSurveysTransaction
    listSupportSurveysTransactions(tenantId: String!, limit: Int): [SupportSurveysTransaction!]!
  }

  extend type Mutation {
    createSupportSurveysTransaction(tenantId: String!, code: String!, name: String!): SupportSurveysTransaction!
    deleteSupportSurveysTransaction(id: ID!): Boolean!
  }
`;

export const SupportSurveysTransactionGqlResolvers = {
  Query: {
    getSupportSurveysTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
