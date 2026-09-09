export const CommDigestQueueGqlTypeDefs = `
  type CommDigestQueue {
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
    getCommDigestQueue(id: ID!): CommDigestQueue
    listCommDigestQueues(tenantId: String!, limit: Int): [CommDigestQueue!]!
  }

  extend type Mutation {
    createCommDigestQueue(tenantId: String!, code: String!, name: String!): CommDigestQueue!
    deleteCommDigestQueue(id: ID!): Boolean!
  }
`;

export const CommDigestQueueGqlResolvers = {
  Query: {
    getCommDigestQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
