export const SupportKnowledgeQueueGqlTypeDefs = `
  type SupportKnowledgeQueue {
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
    getSupportKnowledgeQueue(id: ID!): SupportKnowledgeQueue
    listSupportKnowledgeQueues(tenantId: String!, limit: Int): [SupportKnowledgeQueue!]!
  }

  extend type Mutation {
    createSupportKnowledgeQueue(tenantId: String!, code: String!, name: String!): SupportKnowledgeQueue!
    deleteSupportKnowledgeQueue(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeQueueGqlResolvers = {
  Query: {
    getSupportKnowledgeQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
