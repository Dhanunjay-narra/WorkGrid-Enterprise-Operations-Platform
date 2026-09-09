export const IotTelemetrySnapshotGqlTypeDefs = `
  type IotTelemetrySnapshot {
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
    getIotTelemetrySnapshot(id: ID!): IotTelemetrySnapshot
    listIotTelemetrySnapshots(tenantId: String!, limit: Int): [IotTelemetrySnapshot!]!
  }

  extend type Mutation {
    createIotTelemetrySnapshot(tenantId: String!, code: String!, name: String!): IotTelemetrySnapshot!
    deleteIotTelemetrySnapshot(id: ID!): Boolean!
  }
`;

export const IotTelemetrySnapshotGqlResolvers = {
  Query: {
    getIotTelemetrySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetrySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
