export const SupQueueTypeDefs = `
  type SupQueue {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupQueue(id: ID!): SupQueue
    listSupQueues(tenantId: String!): [SupQueue!]!
  }
`;

export const SupQueueResolvers = {
  Query: {
    getSupQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupQueue", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupQueues: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupQueue", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
