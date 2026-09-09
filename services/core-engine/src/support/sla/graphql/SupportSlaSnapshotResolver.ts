export const SupportSlaSnapshotGqlTypeDefs = `
  type SupportSlaSnapshot {
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
    getSupportSlaSnapshot(id: ID!): SupportSlaSnapshot
    listSupportSlaSnapshots(tenantId: String!, limit: Int): [SupportSlaSnapshot!]!
  }

  extend type Mutation {
    createSupportSlaSnapshot(tenantId: String!, code: String!, name: String!): SupportSlaSnapshot!
    deleteSupportSlaSnapshot(id: ID!): Boolean!
  }
`;

export const SupportSlaSnapshotGqlResolvers = {
  Query: {
    getSupportSlaSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
