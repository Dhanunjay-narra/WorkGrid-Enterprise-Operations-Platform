export const IotCommandsQueueGqlTypeDefs = `
  type IotCommandsQueue {
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
    getIotCommandsQueue(id: ID!): IotCommandsQueue
    listIotCommandsQueues(tenantId: String!, limit: Int): [IotCommandsQueue!]!
  }

  extend type Mutation {
    createIotCommandsQueue(tenantId: String!, code: String!, name: String!): IotCommandsQueue!
    deleteIotCommandsQueue(id: ID!): Boolean!
  }
`;

export const IotCommandsQueueGqlResolvers = {
  Query: {
    getIotCommandsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
