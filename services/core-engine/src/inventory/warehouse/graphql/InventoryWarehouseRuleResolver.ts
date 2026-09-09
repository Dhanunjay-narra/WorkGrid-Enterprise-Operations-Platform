export const InventoryWarehouseRuleGqlTypeDefs = `
  type InventoryWarehouseRule {
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
    getInventoryWarehouseRule(id: ID!): InventoryWarehouseRule
    listInventoryWarehouseRules(tenantId: String!, limit: Int): [InventoryWarehouseRule!]!
  }

  extend type Mutation {
    createInventoryWarehouseRule(tenantId: String!, code: String!, name: String!): InventoryWarehouseRule!
    deleteInventoryWarehouseRule(id: ID!): Boolean!
  }
`;

export const InventoryWarehouseRuleGqlResolvers = {
  Query: {
    getInventoryWarehouseRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryWarehouseRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
