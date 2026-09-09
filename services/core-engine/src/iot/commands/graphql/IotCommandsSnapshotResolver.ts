export const IotCommandsSnapshotGqlTypeDefs = `
  type IotCommandsSnapshot {
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
    getIotCommandsSnapshot(id: ID!): IotCommandsSnapshot
    listIotCommandsSnapshots(tenantId: String!, limit: Int): [IotCommandsSnapshot!]!
  }

  extend type Mutation {
    createIotCommandsSnapshot(tenantId: String!, code: String!, name: String!): IotCommandsSnapshot!
    deleteIotCommandsSnapshot(id: ID!): Boolean!
  }
`;

export const IotCommandsSnapshotGqlResolvers = {
  Query: {
    getIotCommandsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
