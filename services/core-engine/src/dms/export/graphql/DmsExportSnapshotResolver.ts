export const DmsExportSnapshotGqlTypeDefs = `
  type DmsExportSnapshot {
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
    getDmsExportSnapshot(id: ID!): DmsExportSnapshot
    listDmsExportSnapshots(tenantId: String!, limit: Int): [DmsExportSnapshot!]!
  }

  extend type Mutation {
    createDmsExportSnapshot(tenantId: String!, code: String!, name: String!): DmsExportSnapshot!
    deleteDmsExportSnapshot(id: ID!): Boolean!
  }
`;

export const DmsExportSnapshotGqlResolvers = {
  Query: {
    getDmsExportSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
