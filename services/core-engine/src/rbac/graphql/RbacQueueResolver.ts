export const RbacQueueGqlTypeDefs = `
  type RbacQueue {
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
    getRbacQueue(id: ID!): RbacQueue
    listRbacQueues(tenantId: String!, limit: Int): [RbacQueue!]!
  }

  extend type Mutation {
    createRbacQueue(tenantId: String!, code: String!, name: String!): RbacQueue!
    deleteRbacQueue(id: ID!): Boolean!
  }
`;

export const RbacQueueGqlResolvers = {
  Query: {
    getRbacQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
