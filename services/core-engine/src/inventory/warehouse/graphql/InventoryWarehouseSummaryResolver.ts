export const InventoryWarehouseSummaryGqlTypeDefs = `
  type InventoryWarehouseSummary {
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
    getInventoryWarehouseSummary(id: ID!): InventoryWarehouseSummary
    listInventoryWarehouseSummarys(tenantId: String!, limit: Int): [InventoryWarehouseSummary!]!
  }

  extend type Mutation {
    createInventoryWarehouseSummary(tenantId: String!, code: String!, name: String!): InventoryWarehouseSummary!
    deleteInventoryWarehouseSummary(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseSummaryGqlResolvers = {
  Query: {
    getInventoryWarehouseSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
