export const IotFirmwareTransactionGqlTypeDefs = `
  type IotFirmwareTransaction {
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
    getIotFirmwareTransaction(id: ID!): IotFirmwareTransaction
    listIotFirmwareTransactions(tenantId: String!, limit: Int): [IotFirmwareTransaction!]!
  }

  extend type Mutation {
    createIotFirmwareTransaction(tenantId: String!, code: String!, name: String!): IotFirmwareTransaction!
    deleteIotFirmwareTransaction(id: ID!): Boolean!
  }
`;

export const IotFirmwareTransactionGqlResolvers = {
  Query: {
    getIotFirmwareTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
