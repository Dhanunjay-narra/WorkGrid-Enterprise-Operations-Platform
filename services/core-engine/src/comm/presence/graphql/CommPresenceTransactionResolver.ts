export const CommPresenceTransactionGqlTypeDefs = `
  type CommPresenceTransaction {
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
    getCommPresenceTransaction(id: ID!): CommPresenceTransaction
    listCommPresenceTransactions(tenantId: String!, limit: Int): [CommPresenceTransaction!]!
  }

  extend type Mutation {
    createCommPresenceTransaction(tenantId: String!, code: String!, name: String!): CommPresenceTransaction!
    deleteCommPresenceTransaction(id: ID!): Boolean!
  }
`;

export const CommPresenceTransactionGqlResolvers = {
  Query: {
    getCommPresenceTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
