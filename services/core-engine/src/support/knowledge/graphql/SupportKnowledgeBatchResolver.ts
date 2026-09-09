export const SupportKnowledgeBatchGqlTypeDefs = `
  type SupportKnowledgeBatch {
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
    getSupportKnowledgeBatch(id: ID!): SupportKnowledgeBatch
    listSupportKnowledgeBatchs(tenantId: String!, limit: Int): [SupportKnowledgeBatch!]!
  }

  extend type Mutation {
    createSupportKnowledgeBatch(tenantId: String!, code: String!, name: String!): SupportKnowledgeBatch!
    deleteSupportKnowledgeBatch(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeBatchGqlResolvers = {
  Query: {
    getSupportKnowledgeBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
