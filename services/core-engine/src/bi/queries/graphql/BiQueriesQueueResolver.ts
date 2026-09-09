export const BiQueriesQueueGqlTypeDefs = `
  type BiQueriesQueue {
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
    getBiQueriesQueue(id: ID!): BiQueriesQueue
    listBiQueriesQueues(tenantId: String!, limit: Int): [BiQueriesQueue!]!
  }

  extend type Mutation {
    createBiQueriesQueue(tenantId: String!, code: String!, name: String!): BiQueriesQueue!
    deleteBiQueriesQueue(id: ID!): Boolean!
  }
`;

export const BiQueriesQueueGqlResolvers = {
  Query: {
    getBiQueriesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
