export const SupportKnowledgeSnapshotGqlTypeDefs = `
  type SupportKnowledgeSnapshot {
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
    getSupportKnowledgeSnapshot(id: ID!): SupportKnowledgeSnapshot
    listSupportKnowledgeSnapshots(tenantId: String!, limit: Int): [SupportKnowledgeSnapshot!]!
  }

  extend type Mutation {
    createSupportKnowledgeSnapshot(tenantId: String!, code: String!, name: String!): SupportKnowledgeSnapshot!
    deleteSupportKnowledgeSnapshot(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeSnapshotGqlResolvers = {
  Query: {
    getSupportKnowledgeSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
