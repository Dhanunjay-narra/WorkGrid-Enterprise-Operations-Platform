export const IotFleetSnapshotGqlTypeDefs = `
  type IotFleetSnapshot {
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
    getIotFleetSnapshot(id: ID!): IotFleetSnapshot
    listIotFleetSnapshots(tenantId: String!, limit: Int): [IotFleetSnapshot!]!
  }

  extend type Mutation {
    createIotFleetSnapshot(tenantId: String!, code: String!, name: String!): IotFleetSnapshot!
    deleteIotFleetSnapshot(id: ID!): Boolean!
  }
`;

export const IotFleetSnapshotGqlResolvers = {
  Query: {
    getIotFleetSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
