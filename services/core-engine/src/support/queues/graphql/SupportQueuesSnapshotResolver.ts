export const SupportQueuesSnapshotGqlTypeDefs = `
  type SupportQueuesSnapshot {
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
    getSupportQueuesSnapshot(id: ID!): SupportQueuesSnapshot
    listSupportQueuesSnapshots(tenantId: String!, limit: Int): [SupportQueuesSnapshot!]!
  }

  extend type Mutation {
    createSupportQueuesSnapshot(tenantId: String!, code: String!, name: String!): SupportQueuesSnapshot!
    deleteSupportQueuesSnapshot(id: ID!): Boolean!
  }
`;

export const SupportQueuesSnapshotGqlResolvers = {
  Query: {
    getSupportQueuesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
