export const BiDashboardsEntryGqlTypeDefs = `
  type BiDashboardsEntry {
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
    getBiDashboardsEntry(id: ID!): BiDashboardsEntry
    listBiDashboardsEntrys(tenantId: String!, limit: Int): [BiDashboardsEntry!]!
  }

  extend type Mutation {
    createBiDashboardsEntry(tenantId: String!, code: String!, name: String!): BiDashboardsEntry!
    deleteBiDashboardsEntry(id: ID!): Boolean!
  }
`;

export const BiDashboardsEntryGqlResolvers = {
  Query: {
    getBiDashboardsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
