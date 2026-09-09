export const ObsProbesSnapshotGqlTypeDefs = `
  type ObsProbesSnapshot {
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
    getObsProbesSnapshot(id: ID!): ObsProbesSnapshot
    listObsProbesSnapshots(tenantId: String!, limit: Int): [ObsProbesSnapshot!]!
  }

  extend type Mutation {
    createObsProbesSnapshot(tenantId: String!, code: String!, name: String!): ObsProbesSnapshot!
    deleteObsProbesSnapshot(id: ID!): Boolean!
  }
`;

export const ObsProbesSnapshotGqlResolvers = {
  Query: {
    getObsProbesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
