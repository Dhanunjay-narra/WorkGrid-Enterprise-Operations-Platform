export const SupportAgentsSnapshotGqlTypeDefs = `
  type SupportAgentsSnapshot {
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
    getSupportAgentsSnapshot(id: ID!): SupportAgentsSnapshot
    listSupportAgentsSnapshots(tenantId: String!, limit: Int): [SupportAgentsSnapshot!]!
  }

  extend type Mutation {
    createSupportAgentsSnapshot(tenantId: String!, code: String!, name: String!): SupportAgentsSnapshot!
    deleteSupportAgentsSnapshot(id: ID!): Boolean!
  }
`;

export const SupportAgentsSnapshotGqlResolvers = {
  Query: {
    getSupportAgentsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
