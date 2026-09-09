export const IotDevicesBatchGqlTypeDefs = `
  type IotDevicesBatch {
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
    getIotDevicesBatch(id: ID!): IotDevicesBatch
    listIotDevicesBatchs(tenantId: String!, limit: Int): [IotDevicesBatch!]!
  }

  extend type Mutation {
    createIotDevicesBatch(tenantId: String!, code: String!, name: String!): IotDevicesBatch!
    deleteIotDevicesBatch(id: ID!): Boolean!
  }
`;

export const IotDevicesBatchGqlResolvers = {
  Query: {
    getIotDevicesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
