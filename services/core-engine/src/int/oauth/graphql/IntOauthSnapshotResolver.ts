export const IntOauthSnapshotGqlTypeDefs = `
  type IntOauthSnapshot {
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
    getIntOauthSnapshot(id: ID!): IntOauthSnapshot
    listIntOauthSnapshots(tenantId: String!, limit: Int): [IntOauthSnapshot!]!
  }

  extend type Mutation {
    createIntOauthSnapshot(tenantId: String!, code: String!, name: String!): IntOauthSnapshot!
    deleteIntOauthSnapshot(id: ID!): Boolean!
  }
`;

export const IntOauthSnapshotGqlResolvers = {
  Query: {
    getIntOauthSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
