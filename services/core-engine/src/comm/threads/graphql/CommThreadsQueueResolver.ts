export const CommThreadsQueueGqlTypeDefs = `
  type CommThreadsQueue {
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
    getCommThreadsQueue(id: ID!): CommThreadsQueue
    listCommThreadsQueues(tenantId: String!, limit: Int): [CommThreadsQueue!]!
  }

  extend type Mutation {
    createCommThreadsQueue(tenantId: String!, code: String!, name: String!): CommThreadsQueue!
    deleteCommThreadsQueue(id: ID!): Boolean!
  }
`;

export const CommThreadsQueueGqlResolvers = {
  Query: {
    getCommThreadsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
