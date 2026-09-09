export const SupportKnowledgeEntryGqlTypeDefs = `
  type SupportKnowledgeEntry {
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
    getSupportKnowledgeEntry(id: ID!): SupportKnowledgeEntry
    listSupportKnowledgeEntrys(tenantId: String!, limit: Int): [SupportKnowledgeEntry!]!
  }

  extend type Mutation {
    createSupportKnowledgeEntry(tenantId: String!, code: String!, name: String!): SupportKnowledgeEntry!
    deleteSupportKnowledgeEntry(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeEntryGqlResolvers = {
  Query: {
    getSupportKnowledgeEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
