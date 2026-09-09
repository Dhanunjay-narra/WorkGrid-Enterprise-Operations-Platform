export const IotDevicesTaskGqlTypeDefs = `
  type IotDevicesTask {
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
    getIotDevicesTask(id: ID!): IotDevicesTask
    listIotDevicesTasks(tenantId: String!, limit: Int): [IotDevicesTask!]!
  }

  extend type Mutation {
    createIotDevicesTask(tenantId: String!, code: String!, name: String!): IotDevicesTask!
    deleteIotDevicesTask(id: ID!): Boolean!
  }
`;

export const IotDevicesTaskGqlResolvers = {
  Query: {
    getIotDevicesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
