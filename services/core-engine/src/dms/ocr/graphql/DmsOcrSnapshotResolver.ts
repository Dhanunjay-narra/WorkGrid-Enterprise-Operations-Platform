export const DmsOcrSnapshotGqlTypeDefs = `
  type DmsOcrSnapshot {
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
    getDmsOcrSnapshot(id: ID!): DmsOcrSnapshot
    listDmsOcrSnapshots(tenantId: String!, limit: Int): [DmsOcrSnapshot!]!
  }

  extend type Mutation {
    createDmsOcrSnapshot(tenantId: String!, code: String!, name: String!): DmsOcrSnapshot!
    deleteDmsOcrSnapshot(id: ID!): Boolean!
  }
`;

export const DmsOcrSnapshotGqlResolvers = {
  Query: {
    getDmsOcrSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
