export const IotDevicesTransactionGqlTypeDefs = `
  type IotDevicesTransaction {
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
    getIotDevicesTransaction(id: ID!): IotDevicesTransaction
    listIotDevicesTransactions(tenantId: String!, limit: Int): [IotDevicesTransaction!]!
  }

  extend type Mutation {
    createIotDevicesTransaction(tenantId: String!, code: String!, name: String!): IotDevicesTransaction!
    deleteIotDevicesTransaction(id: ID!): Boolean!
  }
`;

export const IotDevicesTransactionGqlResolvers = {
  Query: {
    getIotDevicesTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
