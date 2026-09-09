export const IotLocationsTransactionGqlTypeDefs = `
  type IotLocationsTransaction {
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
    getIotLocationsTransaction(id: ID!): IotLocationsTransaction
    listIotLocationsTransactions(tenantId: String!, limit: Int): [IotLocationsTransaction!]!
  }

  extend type Mutation {
    createIotLocationsTransaction(tenantId: String!, code: String!, name: String!): IotLocationsTransaction!
    deleteIotLocationsTransaction(id: ID!): Boolean!
  }
`;

export const IotLocationsTransactionGqlResolvers = {
  Query: {
    getIotLocationsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
