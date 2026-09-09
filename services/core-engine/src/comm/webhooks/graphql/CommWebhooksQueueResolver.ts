export const CommWebhooksQueueGqlTypeDefs = `
  type CommWebhooksQueue {
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
    getCommWebhooksQueue(id: ID!): CommWebhooksQueue
    listCommWebhooksQueues(tenantId: String!, limit: Int): [CommWebhooksQueue!]!
  }

  extend type Mutation {
    createCommWebhooksQueue(tenantId: String!, code: String!, name: String!): CommWebhooksQueue!
    deleteCommWebhooksQueue(id: ID!): Boolean!
  }
`;

export const CommWebhooksQueueGqlResolvers = {
  Query: {
    getCommWebhooksQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
