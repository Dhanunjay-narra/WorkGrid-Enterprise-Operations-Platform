export const IotFirmwareSnapshotGqlTypeDefs = `
  type IotFirmwareSnapshot {
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
    getIotFirmwareSnapshot(id: ID!): IotFirmwareSnapshot
    listIotFirmwareSnapshots(tenantId: String!, limit: Int): [IotFirmwareSnapshot!]!
  }

  extend type Mutation {
    createIotFirmwareSnapshot(tenantId: String!, code: String!, name: String!): IotFirmwareSnapshot!
    deleteIotFirmwareSnapshot(id: ID!): Boolean!
  }
`;

export const IotFirmwareSnapshotGqlResolvers = {
  Query: {
    getIotFirmwareSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
