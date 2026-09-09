export const InventoryBatchesSummaryGqlTypeDefs = `
  type InventoryBatchesSummary {
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
    getInventoryBatchesSummary(id: ID!): InventoryBatchesSummary
    listInventoryBatchesSummarys(tenantId: String!, limit: Int): [InventoryBatchesSummary!]!
  }

  extend type Mutation {
    createInventoryBatchesSummary(tenantId: String!, code: String!, name: String!): InventoryBatchesSummary!
    deleteInventoryBatchesSummary(id: ID!): Boolean!
  }
`;

export const InventoryBatchesSummaryGqlResolvers = {
  Query: {
    getInventoryBatchesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
