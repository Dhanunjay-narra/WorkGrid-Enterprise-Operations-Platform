export const AiRagSnapshotGqlTypeDefs = `
  type AiRagSnapshot {
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
    getAiRagSnapshot(id: ID!): AiRagSnapshot
    listAiRagSnapshots(tenantId: String!, limit: Int): [AiRagSnapshot!]!
  }

  extend type Mutation {
    createAiRagSnapshot(tenantId: String!, code: String!, name: String!): AiRagSnapshot!
    deleteAiRagSnapshot(id: ID!): Boolean!
  }
`;

export const AiRagSnapshotGqlResolvers = {
  Query: {
    getAiRagSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
