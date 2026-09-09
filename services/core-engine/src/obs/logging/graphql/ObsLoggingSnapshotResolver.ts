export const ObsLoggingSnapshotGqlTypeDefs = `
  type ObsLoggingSnapshot {
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
    getObsLoggingSnapshot(id: ID!): ObsLoggingSnapshot
    listObsLoggingSnapshots(tenantId: String!, limit: Int): [ObsLoggingSnapshot!]!
  }

  extend type Mutation {
    createObsLoggingSnapshot(tenantId: String!, code: String!, name: String!): ObsLoggingSnapshot!
    deleteObsLoggingSnapshot(id: ID!): Boolean!
  }
`;

export const ObsLoggingSnapshotGqlResolvers = {
  Query: {
    getObsLoggingSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
