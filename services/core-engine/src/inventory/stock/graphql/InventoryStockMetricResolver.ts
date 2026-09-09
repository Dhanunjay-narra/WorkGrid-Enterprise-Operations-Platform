export const InventoryStockMetricGqlTypeDefs = `
  type InventoryStockMetric {
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
    getInventoryStockMetric(id: ID!): InventoryStockMetric
    listInventoryStockMetrics(tenantId: String!, limit: Int): [InventoryStockMetric!]!
  }

  extend type Mutation {
    createInventoryStockMetric(tenantId: String!, code: String!, name: String!): InventoryStockMetric!
    deleteInventoryStockMetric(id: ID!): Boolean!
  }
`;

export const InventoryStockMetricGqlResolvers = {
  Query: {
    getInventoryStockMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
