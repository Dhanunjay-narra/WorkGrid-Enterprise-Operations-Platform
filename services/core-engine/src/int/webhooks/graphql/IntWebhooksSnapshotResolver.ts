export const IntWebhooksSnapshotGqlTypeDefs = `
  type IntWebhooksSnapshot {
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
    getIntWebhooksSnapshot(id: ID!): IntWebhooksSnapshot
    listIntWebhooksSnapshots(tenantId: String!, limit: Int): [IntWebhooksSnapshot!]!
  }

  extend type Mutation {
    createIntWebhooksSnapshot(tenantId: String!, code: String!, name: String!): IntWebhooksSnapshot!
    deleteIntWebhooksSnapshot(id: ID!): Boolean!
  }
`;

export const IntWebhooksSnapshotGqlResolvers = {
  Query: {
    getIntWebhooksSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
