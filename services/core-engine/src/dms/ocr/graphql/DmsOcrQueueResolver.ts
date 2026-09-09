export const DmsOcrQueueGqlTypeDefs = `
  type DmsOcrQueue {
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
    getDmsOcrQueue(id: ID!): DmsOcrQueue
    listDmsOcrQueues(tenantId: String!, limit: Int): [DmsOcrQueue!]!
  }

  extend type Mutation {
    createDmsOcrQueue(tenantId: String!, code: String!, name: String!): DmsOcrQueue!
    deleteDmsOcrQueue(id: ID!): Boolean!
  }
`;

export const DmsOcrQueueGqlResolvers = {
  Query: {
    getDmsOcrQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
