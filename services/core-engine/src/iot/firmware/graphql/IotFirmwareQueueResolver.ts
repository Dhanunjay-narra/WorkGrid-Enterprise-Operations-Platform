export const IotFirmwareQueueGqlTypeDefs = `
  type IotFirmwareQueue {
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
    getIotFirmwareQueue(id: ID!): IotFirmwareQueue
    listIotFirmwareQueues(tenantId: String!, limit: Int): [IotFirmwareQueue!]!
  }

  extend type Mutation {
    createIotFirmwareQueue(tenantId: String!, code: String!, name: String!): IotFirmwareQueue!
    deleteIotFirmwareQueue(id: ID!): Boolean!
  }
`;

export const IotFirmwareQueueGqlResolvers = {
  Query: {
    getIotFirmwareQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
