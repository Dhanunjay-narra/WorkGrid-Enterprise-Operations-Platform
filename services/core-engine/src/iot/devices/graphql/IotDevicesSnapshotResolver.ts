export const IotDevicesSnapshotGqlTypeDefs = `
  type IotDevicesSnapshot {
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
    getIotDevicesSnapshot(id: ID!): IotDevicesSnapshot
    listIotDevicesSnapshots(tenantId: String!, limit: Int): [IotDevicesSnapshot!]!
  }

  extend type Mutation {
    createIotDevicesSnapshot(tenantId: String!, code: String!, name: String!): IotDevicesSnapshot!
    deleteIotDevicesSnapshot(id: ID!): Boolean!
  }
`;

export const IotDevicesSnapshotGqlResolvers = {
  Query: {
    getIotDevicesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
