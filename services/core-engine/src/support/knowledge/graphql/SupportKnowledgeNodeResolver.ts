export const SupportKnowledgeNodeGqlTypeDefs = `
  type SupportKnowledgeNode {
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
    getSupportKnowledgeNode(id: ID!): SupportKnowledgeNode
    listSupportKnowledgeNodes(tenantId: String!, limit: Int): [SupportKnowledgeNode!]!
  }

  extend type Mutation {
    createSupportKnowledgeNode(tenantId: String!, code: String!, name: String!): SupportKnowledgeNode!
    deleteSupportKnowledgeNode(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeNodeGqlResolvers = {
  Query: {
    getSupportKnowledgeNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
