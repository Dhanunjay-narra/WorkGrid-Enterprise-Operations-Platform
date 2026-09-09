export const IntWebhooksQueueGqlTypeDefs = `
  type IntWebhooksQueue {
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
    getIntWebhooksQueue(id: ID!): IntWebhooksQueue
    listIntWebhooksQueues(tenantId: String!, limit: Int): [IntWebhooksQueue!]!
  }

  extend type Mutation {
    createIntWebhooksQueue(tenantId: String!, code: String!, name: String!): IntWebhooksQueue!
    deleteIntWebhooksQueue(id: ID!): Boolean!
  }
`;

export const IntWebhooksQueueGqlResolvers = {
  Query: {
    getIntWebhooksQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
