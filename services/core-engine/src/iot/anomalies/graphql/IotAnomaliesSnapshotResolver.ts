export const IotAnomaliesSnapshotGqlTypeDefs = `
  type IotAnomaliesSnapshot {
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
    getIotAnomaliesSnapshot(id: ID!): IotAnomaliesSnapshot
    listIotAnomaliesSnapshots(tenantId: String!, limit: Int): [IotAnomaliesSnapshot!]!
  }

  extend type Mutation {
    createIotAnomaliesSnapshot(tenantId: String!, code: String!, name: String!): IotAnomaliesSnapshot!
    deleteIotAnomaliesSnapshot(id: ID!): Boolean!
  }
`;

export const IotAnomaliesSnapshotGqlResolvers = {
  Query: {
    getIotAnomaliesSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
