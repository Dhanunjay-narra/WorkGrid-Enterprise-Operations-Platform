export const SupportQueuesBatchGqlTypeDefs = `
  type SupportQueuesBatch {
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
    getSupportQueuesBatch(id: ID!): SupportQueuesBatch
    listSupportQueuesBatchs(tenantId: String!, limit: Int): [SupportQueuesBatch!]!
  }

  extend type Mutation {
    createSupportQueuesBatch(tenantId: String!, code: String!, name: String!): SupportQueuesBatch!
    deleteSupportQueuesBatch(id: ID!): Boolean!
  }
`;

export const SupportQueuesBatchGqlResolvers = {
  Query: {
    getSupportQueuesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
