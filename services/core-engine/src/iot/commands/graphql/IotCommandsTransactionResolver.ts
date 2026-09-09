export const IotCommandsTransactionGqlTypeDefs = `
  type IotCommandsTransaction {
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
    getIotCommandsTransaction(id: ID!): IotCommandsTransaction
    listIotCommandsTransactions(tenantId: String!, limit: Int): [IotCommandsTransaction!]!
  }

  extend type Mutation {
    createIotCommandsTransaction(tenantId: String!, code: String!, name: String!): IotCommandsTransaction!
    deleteIotCommandsTransaction(id: ID!): Boolean!
  }
`;

export const IotCommandsTransactionGqlResolvers = {
  Query: {
    getIotCommandsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
