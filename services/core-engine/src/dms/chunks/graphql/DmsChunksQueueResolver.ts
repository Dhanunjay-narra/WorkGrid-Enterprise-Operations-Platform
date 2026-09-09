export const DmsChunksQueueGqlTypeDefs = `
  type DmsChunksQueue {
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
    getDmsChunksQueue(id: ID!): DmsChunksQueue
    listDmsChunksQueues(tenantId: String!, limit: Int): [DmsChunksQueue!]!
  }

  extend type Mutation {
    createDmsChunksQueue(tenantId: String!, code: String!, name: String!): DmsChunksQueue!
    deleteDmsChunksQueue(id: ID!): Boolean!
  }
`;

export const DmsChunksQueueGqlResolvers = {
  Query: {
    getDmsChunksQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
