export const CommChannelsQueueGqlTypeDefs = `
  type CommChannelsQueue {
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
    getCommChannelsQueue(id: ID!): CommChannelsQueue
    listCommChannelsQueues(tenantId: String!, limit: Int): [CommChannelsQueue!]!
  }

  extend type Mutation {
    createCommChannelsQueue(tenantId: String!, code: String!, name: String!): CommChannelsQueue!
    deleteCommChannelsQueue(id: ID!): Boolean!
  }
`;

export const CommChannelsQueueGqlResolvers = {
  Query: {
    getCommChannelsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
