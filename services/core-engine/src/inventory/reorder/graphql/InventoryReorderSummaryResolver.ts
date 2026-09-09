export const InventoryReorderSummaryGqlTypeDefs = `
  type InventoryReorderSummary {
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
    getInventoryReorderSummary(id: ID!): InventoryReorderSummary
    listInventoryReorderSummarys(tenantId: String!, limit: Int): [InventoryReorderSummary!]!
  }

  extend type Mutation {
    createInventoryReorderSummary(tenantId: String!, code: String!, name: String!): InventoryReorderSummary!
    deleteInventoryReorderSummary(id: ID!): Boolean!
  }
`;

export const InventoryReorderSummaryGqlResolvers = {
  Query: {
    getInventoryReorderSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryReorderSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
