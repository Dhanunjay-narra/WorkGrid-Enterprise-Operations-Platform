export const CommNotificationsQueueGqlTypeDefs = `
  type CommNotificationsQueue {
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
    getCommNotificationsQueue(id: ID!): CommNotificationsQueue
    listCommNotificationsQueues(tenantId: String!, limit: Int): [CommNotificationsQueue!]!
  }

  extend type Mutation {
    createCommNotificationsQueue(tenantId: String!, code: String!, name: String!): CommNotificationsQueue!
    deleteCommNotificationsQueue(id: ID!): Boolean!
  }
`;

export const CommNotificationsQueueGqlResolvers = {
  Query: {
    getCommNotificationsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
