export const SupportTicketsSnapshotGqlTypeDefs = `
  type SupportTicketsSnapshot {
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
    getSupportTicketsSnapshot(id: ID!): SupportTicketsSnapshot
    listSupportTicketsSnapshots(tenantId: String!, limit: Int): [SupportTicketsSnapshot!]!
  }

  extend type Mutation {
    createSupportTicketsSnapshot(tenantId: String!, code: String!, name: String!): SupportTicketsSnapshot!
    deleteSupportTicketsSnapshot(id: ID!): Boolean!
  }
`;

export const SupportTicketsSnapshotGqlResolvers = {
  Query: {
    getSupportTicketsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
