export const SupportKnowledgeItemGqlTypeDefs = `
  type SupportKnowledgeItem {
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
    getSupportKnowledgeItem(id: ID!): SupportKnowledgeItem
    listSupportKnowledgeItems(tenantId: String!, limit: Int): [SupportKnowledgeItem!]!
  }

  extend type Mutation {
    createSupportKnowledgeItem(tenantId: String!, code: String!, name: String!): SupportKnowledgeItem!
    deleteSupportKnowledgeItem(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeItemGqlResolvers = {
  Query: {
    getSupportKnowledgeItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
