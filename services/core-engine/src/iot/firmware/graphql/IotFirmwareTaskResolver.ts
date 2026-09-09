export const IotFirmwareTaskGqlTypeDefs = `
  type IotFirmwareTask {
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
    getIotFirmwareTask(id: ID!): IotFirmwareTask
    listIotFirmwareTasks(tenantId: String!, limit: Int): [IotFirmwareTask!]!
  }

  extend type Mutation {
    createIotFirmwareTask(tenantId: String!, code: String!, name: String!): IotFirmwareTask!
    deleteIotFirmwareTask(id: ID!): Boolean!
  }
`;

export const IotFirmwareTaskGqlResolvers = {
  Query: {
    getIotFirmwareTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
