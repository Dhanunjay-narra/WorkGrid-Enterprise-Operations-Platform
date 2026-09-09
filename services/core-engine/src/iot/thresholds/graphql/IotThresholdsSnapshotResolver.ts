export const IotThresholdsSnapshotGqlTypeDefs = `
  type IotThresholdsSnapshot {
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
    getIotThresholdsSnapshot(id: ID!): IotThresholdsSnapshot
    listIotThresholdsSnapshots(tenantId: String!, limit: Int): [IotThresholdsSnapshot!]!
  }

  extend type Mutation {
    createIotThresholdsSnapshot(tenantId: String!, code: String!, name: String!): IotThresholdsSnapshot!
    deleteIotThresholdsSnapshot(id: ID!): Boolean!
  }
`;

export const IotThresholdsSnapshotGqlResolvers = {
  Query: {
    getIotThresholdsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
