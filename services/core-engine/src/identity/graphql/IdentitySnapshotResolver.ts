export const IdentitySnapshotGqlTypeDefs = `
  type IdentitySnapshot {
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
    getIdentitySnapshot(id: ID!): IdentitySnapshot
    listIdentitySnapshots(tenantId: String!, limit: Int): [IdentitySnapshot!]!
  }

  extend type Mutation {
    createIdentitySnapshot(tenantId: String!, code: String!, name: String!): IdentitySnapshot!
    deleteIdentitySnapshot(id: ID!): Boolean!
  }
`;

export const IdentitySnapshotGqlResolvers = {
  Query: {
    getIdentitySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentitySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
