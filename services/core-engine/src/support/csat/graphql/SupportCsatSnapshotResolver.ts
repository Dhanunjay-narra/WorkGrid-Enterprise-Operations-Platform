export const SupportCsatSnapshotGqlTypeDefs = `
  type SupportCsatSnapshot {
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
    getSupportCsatSnapshot(id: ID!): SupportCsatSnapshot
    listSupportCsatSnapshots(tenantId: String!, limit: Int): [SupportCsatSnapshot!]!
  }

  extend type Mutation {
    createSupportCsatSnapshot(tenantId: String!, code: String!, name: String!): SupportCsatSnapshot!
    deleteSupportCsatSnapshot(id: ID!): Boolean!
  }
`;

export const SupportCsatSnapshotGqlResolvers = {
  Query: {
    getSupportCsatSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
