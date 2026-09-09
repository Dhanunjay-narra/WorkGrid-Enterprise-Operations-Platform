export const IotLocationsSnapshotGqlTypeDefs = `
  type IotLocationsSnapshot {
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
    getIotLocationsSnapshot(id: ID!): IotLocationsSnapshot
    listIotLocationsSnapshots(tenantId: String!, limit: Int): [IotLocationsSnapshot!]!
  }

  extend type Mutation {
    createIotLocationsSnapshot(tenantId: String!, code: String!, name: String!): IotLocationsSnapshot!
    deleteIotLocationsSnapshot(id: ID!): Boolean!
  }
`;

export const IotLocationsSnapshotGqlResolvers = {
  Query: {
    getIotLocationsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
