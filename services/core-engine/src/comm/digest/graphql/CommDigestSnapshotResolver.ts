export const CommDigestSnapshotGqlTypeDefs = `
  type CommDigestSnapshot {
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
    getCommDigestSnapshot(id: ID!): CommDigestSnapshot
    listCommDigestSnapshots(tenantId: String!, limit: Int): [CommDigestSnapshot!]!
  }

  extend type Mutation {
    createCommDigestSnapshot(tenantId: String!, code: String!, name: String!): CommDigestSnapshot!
    deleteCommDigestSnapshot(id: ID!): Boolean!
  }
`;

export const CommDigestSnapshotGqlResolvers = {
  Query: {
    getCommDigestSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
