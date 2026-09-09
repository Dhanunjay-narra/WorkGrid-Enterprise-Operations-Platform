export const IotThresholdsQueueGqlTypeDefs = `
  type IotThresholdsQueue {
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
    getIotThresholdsQueue(id: ID!): IotThresholdsQueue
    listIotThresholdsQueues(tenantId: String!, limit: Int): [IotThresholdsQueue!]!
  }

  extend type Mutation {
    createIotThresholdsQueue(tenantId: String!, code: String!, name: String!): IotThresholdsQueue!
    deleteIotThresholdsQueue(id: ID!): Boolean!
  }
`;

export const IotThresholdsQueueGqlResolvers = {
  Query: {
    getIotThresholdsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
