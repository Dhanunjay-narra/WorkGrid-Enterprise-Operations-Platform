export const IotFirmwareBatchGqlTypeDefs = `
  type IotFirmwareBatch {
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
    getIotFirmwareBatch(id: ID!): IotFirmwareBatch
    listIotFirmwareBatchs(tenantId: String!, limit: Int): [IotFirmwareBatch!]!
  }

  extend type Mutation {
    createIotFirmwareBatch(tenantId: String!, code: String!, name: String!): IotFirmwareBatch!
    deleteIotFirmwareBatch(id: ID!): Boolean!
  }
`;

export const IotFirmwareBatchGqlResolvers = {
  Query: {
    getIotFirmwareBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
