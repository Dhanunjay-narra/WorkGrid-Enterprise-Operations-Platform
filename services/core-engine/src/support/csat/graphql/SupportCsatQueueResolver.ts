export const SupportCsatQueueGqlTypeDefs = `
  type SupportCsatQueue {
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
    getSupportCsatQueue(id: ID!): SupportCsatQueue
    listSupportCsatQueues(tenantId: String!, limit: Int): [SupportCsatQueue!]!
  }

  extend type Mutation {
    createSupportCsatQueue(tenantId: String!, code: String!, name: String!): SupportCsatQueue!
    deleteSupportCsatQueue(id: ID!): Boolean!
  }
`;

export const SupportCsatQueueGqlResolvers = {
  Query: {
    getSupportCsatQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
