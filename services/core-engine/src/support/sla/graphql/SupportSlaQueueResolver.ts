export const SupportSlaQueueGqlTypeDefs = `
  type SupportSlaQueue {
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
    getSupportSlaQueue(id: ID!): SupportSlaQueue
    listSupportSlaQueues(tenantId: String!, limit: Int): [SupportSlaQueue!]!
  }

  extend type Mutation {
    createSupportSlaQueue(tenantId: String!, code: String!, name: String!): SupportSlaQueue!
    deleteSupportSlaQueue(id: ID!): Boolean!
  }
`;

export const SupportSlaQueueGqlResolvers = {
  Query: {
    getSupportSlaQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
