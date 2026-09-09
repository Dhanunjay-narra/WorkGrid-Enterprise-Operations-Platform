export const AiAgentsSnapshotGqlTypeDefs = `
  type AiAgentsSnapshot {
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
    getAiAgentsSnapshot(id: ID!): AiAgentsSnapshot
    listAiAgentsSnapshots(tenantId: String!, limit: Int): [AiAgentsSnapshot!]!
  }

  extend type Mutation {
    createAiAgentsSnapshot(tenantId: String!, code: String!, name: String!): AiAgentsSnapshot!
    deleteAiAgentsSnapshot(id: ID!): Boolean!
  }
`;

export const AiAgentsSnapshotGqlResolvers = {
  Query: {
    getAiAgentsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
