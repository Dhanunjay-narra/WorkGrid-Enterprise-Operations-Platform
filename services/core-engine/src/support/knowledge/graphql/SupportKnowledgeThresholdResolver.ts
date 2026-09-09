export const SupportKnowledgeThresholdGqlTypeDefs = `
  type SupportKnowledgeThreshold {
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
    getSupportKnowledgeThreshold(id: ID!): SupportKnowledgeThreshold
    listSupportKnowledgeThresholds(tenantId: String!, limit: Int): [SupportKnowledgeThreshold!]!
  }

  extend type Mutation {
    createSupportKnowledgeThreshold(tenantId: String!, code: String!, name: String!): SupportKnowledgeThreshold!
    deleteSupportKnowledgeThreshold(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeThresholdGqlResolvers = {
  Query: {
    getSupportKnowledgeThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
