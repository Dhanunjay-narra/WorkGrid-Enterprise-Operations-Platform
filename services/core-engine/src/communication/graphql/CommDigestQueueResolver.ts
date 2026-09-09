export const CommDigestQueueTypeDefs = `
  type CommDigestQueue {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommDigestQueue(id: ID!): CommDigestQueue
    listCommDigestQueues(tenantId: String!): [CommDigestQueue!]!
  }
`;

export const CommDigestQueueResolvers = {
  Query: {
    getCommDigestQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommDigestQueue", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommDigestQueues: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommDigestQueue", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
