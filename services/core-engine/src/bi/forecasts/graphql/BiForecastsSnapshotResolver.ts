export const BiForecastsSnapshotGqlTypeDefs = `
  type BiForecastsSnapshot {
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
    getBiForecastsSnapshot(id: ID!): BiForecastsSnapshot
    listBiForecastsSnapshots(tenantId: String!, limit: Int): [BiForecastsSnapshot!]!
  }

  extend type Mutation {
    createBiForecastsSnapshot(tenantId: String!, code: String!, name: String!): BiForecastsSnapshot!
    deleteBiForecastsSnapshot(id: ID!): Boolean!
  }
`;

export const BiForecastsSnapshotGqlResolvers = {
  Query: {
    getBiForecastsSnapshot: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsSnapshot", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
