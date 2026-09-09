export const AiRagBatchGqlTypeDefs = `
  type AiRagBatch {
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
    getAiRagBatch(id: ID!): AiRagBatch
    listAiRagBatchs(tenantId: String!, limit: Int): [AiRagBatch!]!
  }

  extend type Mutation {
    createAiRagBatch(tenantId: String!, code: String!, name: String!): AiRagBatch!
    deleteAiRagBatch(id: ID!): Boolean!
  }
`;

export const AiRagBatchGqlResolvers = {
  Query: {
    getAiRagBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
