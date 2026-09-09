export const CommPresenceQueueGqlTypeDefs = `
  type CommPresenceQueue {
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
    getCommPresenceQueue(id: ID!): CommPresenceQueue
    listCommPresenceQueues(tenantId: String!, limit: Int): [CommPresenceQueue!]!
  }

  extend type Mutation {
    createCommPresenceQueue(tenantId: String!, code: String!, name: String!): CommPresenceQueue!
    deleteCommPresenceQueue(id: ID!): Boolean!
  }
`;

export const CommPresenceQueueGqlResolvers = {
  Query: {
    getCommPresenceQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
