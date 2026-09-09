export const ObsSpansTransactionGqlTypeDefs = `
  type ObsSpansTransaction {
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
    getObsSpansTransaction(id: ID!): ObsSpansTransaction
    listObsSpansTransactions(tenantId: String!, limit: Int): [ObsSpansTransaction!]!
  }

  extend type Mutation {
    createObsSpansTransaction(tenantId: String!, code: String!, name: String!): ObsSpansTransaction!
    deleteObsSpansTransaction(id: ID!): Boolean!
  }
`;

export const ObsSpansTransactionGqlResolvers = {
  Query: {
    getObsSpansTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
