export const ObsSpansSnapshotGqlTypeDefs = `
  type ObsSpansSnapshot {
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
    getObsSpansSnapshot(id: ID!): ObsSpansSnapshot
    listObsSpansSnapshots(tenantId: String!, limit: Int): [ObsSpansSnapshot!]!
  }

  extend type Mutation {
    createObsSpansSnapshot(tenantId: String!, code: String!, name: String!): ObsSpansSnapshot!
    deleteObsSpansSnapshot(id: ID!): Boolean!
  }
`;

export const ObsSpansSnapshotGqlResolvers = {
  Query: {
    getObsSpansSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
