export const IotAnomaliesQueueGqlTypeDefs = `
  type IotAnomaliesQueue {
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
    getIotAnomaliesQueue(id: ID!): IotAnomaliesQueue
    listIotAnomaliesQueues(tenantId: String!, limit: Int): [IotAnomaliesQueue!]!
  }

  extend type Mutation {
    createIotAnomaliesQueue(tenantId: String!, code: String!, name: String!): IotAnomaliesQueue!
    deleteIotAnomaliesQueue(id: ID!): Boolean!
  }
`;

export const IotAnomaliesQueueGqlResolvers = {
  Query: {
    getIotAnomaliesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
