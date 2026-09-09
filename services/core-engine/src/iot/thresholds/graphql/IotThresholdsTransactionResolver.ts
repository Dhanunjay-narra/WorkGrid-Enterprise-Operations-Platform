export const IotThresholdsTransactionGqlTypeDefs = `
  type IotThresholdsTransaction {
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
    getIotThresholdsTransaction(id: ID!): IotThresholdsTransaction
    listIotThresholdsTransactions(tenantId: String!, limit: Int): [IotThresholdsTransaction!]!
  }

  extend type Mutation {
    createIotThresholdsTransaction(tenantId: String!, code: String!, name: String!): IotThresholdsTransaction!
    deleteIotThresholdsTransaction(id: ID!): Boolean!
  }
`;

export const IotThresholdsTransactionGqlResolvers = {
  Query: {
    getIotThresholdsTransaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsTransaction", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
