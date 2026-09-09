export const IntSyncQueueGqlTypeDefs = `
  type IntSyncQueue {
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
    getIntSyncQueue(id: ID!): IntSyncQueue
    listIntSyncQueues(tenantId: String!, limit: Int): [IntSyncQueue!]!
  }

  extend type Mutation {
    createIntSyncQueue(tenantId: String!, code: String!, name: String!): IntSyncQueue!
    deleteIntSyncQueue(id: ID!): Boolean!
  }
`;

export const IntSyncQueueGqlResolvers = {
  Query: {
    getIntSyncQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
