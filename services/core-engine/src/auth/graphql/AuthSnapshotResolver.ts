export const AuthSnapshotGqlTypeDefs = `
  type AuthSnapshot {
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
    getAuthSnapshot(id: ID!): AuthSnapshot
    listAuthSnapshots(tenantId: String!, limit: Int): [AuthSnapshot!]!
  }

  extend type Mutation {
    createAuthSnapshot(tenantId: String!, code: String!, name: String!): AuthSnapshot!
    deleteAuthSnapshot(id: ID!): Boolean!
  }
`;

export const AuthSnapshotGqlResolvers = {
  Query: {
    getAuthSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
