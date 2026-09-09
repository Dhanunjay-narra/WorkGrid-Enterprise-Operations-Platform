export const InventoryStockRuleGqlTypeDefs = `
  type InventoryStockRule {
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
    getInventoryStockRule(id: ID!): InventoryStockRule
    listInventoryStockRules(tenantId: String!, limit: Int): [InventoryStockRule!]!
  }

  extend type Mutation {
    createInventoryStockRule(tenantId: String!, code: String!, name: String!): InventoryStockRule!
    deleteInventoryStockRule(id: ID!): Boolean!
  }
`;

export const InventoryStockRuleGqlResolvers = {
  Query: {
    getInventoryStockRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
