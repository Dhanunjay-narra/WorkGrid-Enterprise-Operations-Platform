export const SupportQueuesQueueGqlTypeDefs = `
  type SupportQueuesQueue {
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
    getSupportQueuesQueue(id: ID!): SupportQueuesQueue
    listSupportQueuesQueues(tenantId: String!, limit: Int): [SupportQueuesQueue!]!
  }

  extend type Mutation {
    createSupportQueuesQueue(tenantId: String!, code: String!, name: String!): SupportQueuesQueue!
    deleteSupportQueuesQueue(id: ID!): Boolean!
  }
`;

export const SupportQueuesQueueGqlResolvers = {
  Query: {
    getSupportQueuesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
