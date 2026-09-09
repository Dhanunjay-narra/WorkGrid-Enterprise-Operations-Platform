export const ObsProfilingTransactionGqlTypeDefs = `
  type ObsProfilingTransaction {
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
    getObsProfilingTransaction(id: ID!): ObsProfilingTransaction
    listObsProfilingTransactions(tenantId: String!, limit: Int): [ObsProfilingTransaction!]!
  }

  extend type Mutation {
    createObsProfilingTransaction(tenantId: String!, code: String!, name: String!): ObsProfilingTransaction!
    deleteObsProfilingTransaction(id: ID!): Boolean!
  }
`;

export const ObsProfilingTransactionGqlResolvers = {
  Query: {
    getObsProfilingTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
