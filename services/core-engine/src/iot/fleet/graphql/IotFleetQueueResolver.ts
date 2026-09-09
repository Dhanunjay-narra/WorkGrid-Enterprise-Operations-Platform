export const IotFleetQueueGqlTypeDefs = `
  type IotFleetQueue {
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
    getIotFleetQueue(id: ID!): IotFleetQueue
    listIotFleetQueues(tenantId: String!, limit: Int): [IotFleetQueue!]!
  }

  extend type Mutation {
    createIotFleetQueue(tenantId: String!, code: String!, name: String!): IotFleetQueue!
    deleteIotFleetQueue(id: ID!): Boolean!
  }
`;

export const IotFleetQueueGqlResolvers = {
  Query: {
    getIotFleetQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
