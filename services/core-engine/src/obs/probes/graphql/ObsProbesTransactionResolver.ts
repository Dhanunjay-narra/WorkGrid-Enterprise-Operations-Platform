export const ObsProbesTransactionGqlTypeDefs = `
  type ObsProbesTransaction {
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
    getObsProbesTransaction(id: ID!): ObsProbesTransaction
    listObsProbesTransactions(tenantId: String!, limit: Int): [ObsProbesTransaction!]!
  }

  extend type Mutation {
    createObsProbesTransaction(tenantId: String!, code: String!, name: String!): ObsProbesTransaction!
    deleteObsProbesTransaction(id: ID!): Boolean!
  }
`;

export const ObsProbesTransactionGqlResolvers = {
  Query: {
    getObsProbesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
