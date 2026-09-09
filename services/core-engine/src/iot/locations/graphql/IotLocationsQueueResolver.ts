export const IotLocationsQueueGqlTypeDefs = `
  type IotLocationsQueue {
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
    getIotLocationsQueue(id: ID!): IotLocationsQueue
    listIotLocationsQueues(tenantId: String!, limit: Int): [IotLocationsQueue!]!
  }

  extend type Mutation {
    createIotLocationsQueue(tenantId: String!, code: String!, name: String!): IotLocationsQueue!
    deleteIotLocationsQueue(id: ID!): Boolean!
  }
`;

export const IotLocationsQueueGqlResolvers = {
  Query: {
    getIotLocationsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
