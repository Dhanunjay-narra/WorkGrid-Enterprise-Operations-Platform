export const AiPromptsSnapshotGqlTypeDefs = `
  type AiPromptsSnapshot {
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
    getAiPromptsSnapshot(id: ID!): AiPromptsSnapshot
    listAiPromptsSnapshots(tenantId: String!, limit: Int): [AiPromptsSnapshot!]!
  }

  extend type Mutation {
    createAiPromptsSnapshot(tenantId: String!, code: String!, name: String!): AiPromptsSnapshot!
    deleteAiPromptsSnapshot(id: ID!): Boolean!
  }
`;

export const AiPromptsSnapshotGqlResolvers = {
  Query: {
    getAiPromptsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
