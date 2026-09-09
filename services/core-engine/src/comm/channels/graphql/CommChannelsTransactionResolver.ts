export const CommChannelsTransactionGqlTypeDefs = `
  type CommChannelsTransaction {
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
    getCommChannelsTransaction(id: ID!): CommChannelsTransaction
    listCommChannelsTransactions(tenantId: String!, limit: Int): [CommChannelsTransaction!]!
  }

  extend type Mutation {
    createCommChannelsTransaction(tenantId: String!, code: String!, name: String!): CommChannelsTransaction!
    deleteCommChannelsTransaction(id: ID!): Boolean!
  }
`;

export const CommChannelsTransactionGqlResolvers = {
  Query: {
    getCommChannelsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
