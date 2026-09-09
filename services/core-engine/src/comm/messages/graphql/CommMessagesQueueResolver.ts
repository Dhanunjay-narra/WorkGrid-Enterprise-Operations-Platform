export const CommMessagesQueueGqlTypeDefs = `
  type CommMessagesQueue {
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
    getCommMessagesQueue(id: ID!): CommMessagesQueue
    listCommMessagesQueues(tenantId: String!, limit: Int): [CommMessagesQueue!]!
  }

  extend type Mutation {
    createCommMessagesQueue(tenantId: String!, code: String!, name: String!): CommMessagesQueue!
    deleteCommMessagesQueue(id: ID!): Boolean!
  }
`;

export const CommMessagesQueueGqlResolvers = {
  Query: {
    getCommMessagesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
