export const ObsProfilingSnapshotGqlTypeDefs = `
  type ObsProfilingSnapshot {
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
    getObsProfilingSnapshot(id: ID!): ObsProfilingSnapshot
    listObsProfilingSnapshots(tenantId: String!, limit: Int): [ObsProfilingSnapshot!]!
  }

  extend type Mutation {
    createObsProfilingSnapshot(tenantId: String!, code: String!, name: String!): ObsProfilingSnapshot!
    deleteObsProfilingSnapshot(id: ID!): Boolean!
  }
`;

export const ObsProfilingSnapshotGqlResolvers = {
  Query: {
    getObsProfilingSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
