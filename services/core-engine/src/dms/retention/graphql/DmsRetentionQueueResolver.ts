export const DmsRetentionQueueGqlTypeDefs = `
  type DmsRetentionQueue {
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
    getDmsRetentionQueue(id: ID!): DmsRetentionQueue
    listDmsRetentionQueues(tenantId: String!, limit: Int): [DmsRetentionQueue!]!
  }

  extend type Mutation {
    createDmsRetentionQueue(tenantId: String!, code: String!, name: String!): DmsRetentionQueue!
    deleteDmsRetentionQueue(id: ID!): Boolean!
  }
`;

export const DmsRetentionQueueGqlResolvers = {
  Query: {
    getDmsRetentionQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
