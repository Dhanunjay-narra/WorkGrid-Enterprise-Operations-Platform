export const InventorySkuRuleGqlTypeDefs = `
  type InventorySkuRule {
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
    getInventorySkuRule(id: ID!): InventorySkuRule
    listInventorySkuRules(tenantId: String!, limit: Int): [InventorySkuRule!]!
  }

  extend type Mutation {
    createInventorySkuRule(tenantId: String!, code: String!, name: String!): InventorySkuRule!
    deleteInventorySkuRule(id: ID!): Boolean!
  }
`;

export const InventorySkuRuleGqlResolvers = {
  Query: {
    getInventorySkuRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySkuRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
