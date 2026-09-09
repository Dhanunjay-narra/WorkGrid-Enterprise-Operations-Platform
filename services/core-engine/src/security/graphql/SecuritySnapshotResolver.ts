export const SecuritySnapshotGqlTypeDefs = `
  type SecuritySnapshot {
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
    getSecuritySnapshot(id: ID!): SecuritySnapshot
    listSecuritySnapshots(tenantId: String!, limit: Int): [SecuritySnapshot!]!
  }

  extend type Mutation {
    createSecuritySnapshot(tenantId: String!, code: String!, name: String!): SecuritySnapshot!
    deleteSecuritySnapshot(id: ID!): Boolean!
  }
`;

export const SecuritySnapshotGqlResolvers = {
  Query: {
    getSecuritySnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecuritySnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
