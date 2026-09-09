export const SecurityQueueGqlTypeDefs = `
  type SecurityQueue {
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
    getSecurityQueue(id: ID!): SecurityQueue
    listSecurityQueues(tenantId: String!, limit: Int): [SecurityQueue!]!
  }

  extend type Mutation {
    createSecurityQueue(tenantId: String!, code: String!, name: String!): SecurityQueue!
    deleteSecurityQueue(id: ID!): Boolean!
  }
`;

export const SecurityQueueGqlResolvers = {
  Query: {
    getSecurityQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
