export const AiMemoryBatchGqlTypeDefs = `
  type AiMemoryBatch {
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
    getAiMemoryBatch(id: ID!): AiMemoryBatch
    listAiMemoryBatchs(tenantId: String!, limit: Int): [AiMemoryBatch!]!
  }

  extend type Mutation {
    createAiMemoryBatch(tenantId: String!, code: String!, name: String!): AiMemoryBatch!
    deleteAiMemoryBatch(id: ID!): Boolean!
  }
`;

export const AiMemoryBatchGqlResolvers = {
  Query: {
    getAiMemoryBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
