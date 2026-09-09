export const SupportEscalationSnapshotGqlTypeDefs = `
  type SupportEscalationSnapshot {
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
    getSupportEscalationSnapshot(id: ID!): SupportEscalationSnapshot
    listSupportEscalationSnapshots(tenantId: String!, limit: Int): [SupportEscalationSnapshot!]!
  }

  extend type Mutation {
    createSupportEscalationSnapshot(tenantId: String!, code: String!, name: String!): SupportEscalationSnapshot!
    deleteSupportEscalationSnapshot(id: ID!): Boolean!
  }
`;

export const SupportEscalationSnapshotGqlResolvers = {
  Query: {
    getSupportEscalationSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
