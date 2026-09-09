export const InventoryOrdersRuleGqlTypeDefs = `
  type InventoryOrdersRule {
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
    getInventoryOrdersRule(id: ID!): InventoryOrdersRule
    listInventoryOrdersRules(tenantId: String!, limit: Int): [InventoryOrdersRule!]!
  }

  extend type Mutation {
    createInventoryOrdersRule(tenantId: String!, code: String!, name: String!): InventoryOrdersRule!
    deleteInventoryOrdersRule(id: ID!): Boolean!
  }
`;

export const InventoryOrdersRuleGqlResolvers = {
  Query: {
    getInventoryOrdersRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryOrdersRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
