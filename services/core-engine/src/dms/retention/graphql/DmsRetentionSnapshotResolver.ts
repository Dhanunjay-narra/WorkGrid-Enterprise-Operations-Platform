export const DmsRetentionSnapshotGqlTypeDefs = `
  type DmsRetentionSnapshot {
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
    getDmsRetentionSnapshot(id: ID!): DmsRetentionSnapshot
    listDmsRetentionSnapshots(tenantId: String!, limit: Int): [DmsRetentionSnapshot!]!
  }

  extend type Mutation {
    createDmsRetentionSnapshot(tenantId: String!, code: String!, name: String!): DmsRetentionSnapshot!
    deleteDmsRetentionSnapshot(id: ID!): Boolean!
  }
`;

export const DmsRetentionSnapshotGqlResolvers = {
  Query: {
    getDmsRetentionSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
