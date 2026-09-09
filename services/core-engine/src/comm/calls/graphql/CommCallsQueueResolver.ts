export const CommCallsQueueGqlTypeDefs = `
  type CommCallsQueue {
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
    getCommCallsQueue(id: ID!): CommCallsQueue
    listCommCallsQueues(tenantId: String!, limit: Int): [CommCallsQueue!]!
  }

  extend type Mutation {
    createCommCallsQueue(tenantId: String!, code: String!, name: String!): CommCallsQueue!
    deleteCommCallsQueue(id: ID!): Boolean!
  }
`;

export const CommCallsQueueGqlResolvers = {
  Query: {
    getCommCallsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
