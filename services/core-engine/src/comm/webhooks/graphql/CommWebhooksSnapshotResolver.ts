export const CommWebhooksSnapshotGqlTypeDefs = `
  type CommWebhooksSnapshot {
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
    getCommWebhooksSnapshot(id: ID!): CommWebhooksSnapshot
    listCommWebhooksSnapshots(tenantId: String!, limit: Int): [CommWebhooksSnapshot!]!
  }

  extend type Mutation {
    createCommWebhooksSnapshot(tenantId: String!, code: String!, name: String!): CommWebhooksSnapshot!
    deleteCommWebhooksSnapshot(id: ID!): Boolean!
  }
`;

export const CommWebhooksSnapshotGqlResolvers = {
  Query: {
    getCommWebhooksSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
