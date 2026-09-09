export const IotDevicesQueueGqlTypeDefs = `
  type IotDevicesQueue {
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
    getIotDevicesQueue(id: ID!): IotDevicesQueue
    listIotDevicesQueues(tenantId: String!, limit: Int): [IotDevicesQueue!]!
  }

  extend type Mutation {
    createIotDevicesQueue(tenantId: String!, code: String!, name: String!): IotDevicesQueue!
    deleteIotDevicesQueue(id: ID!): Boolean!
  }
`;

export const IotDevicesQueueGqlResolvers = {
  Query: {
    getIotDevicesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
