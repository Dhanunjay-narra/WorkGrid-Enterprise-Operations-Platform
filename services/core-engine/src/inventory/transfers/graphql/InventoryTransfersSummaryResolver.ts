export const InventoryTransfersSummaryGqlTypeDefs = `
  type InventoryTransfersSummary {
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
    getInventoryTransfersSummary(id: ID!): InventoryTransfersSummary
    listInventoryTransfersSummarys(tenantId: String!, limit: Int): [InventoryTransfersSummary!]!
  }

  extend type Mutation {
    createInventoryTransfersSummary(tenantId: String!, code: String!, name: String!): InventoryTransfersSummary!
    deleteInventoryTransfersSummary(id: ID!): Boolean!
  }
`;

export const InventoryTransfersSummaryGqlResolvers = {
  Query: {
    getInventoryTransfersSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryTransfersSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
