export const InventoryReorderRuleGqlTypeDefs = `
  type InventoryReorderRule {
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
    getInventoryReorderRule(id: ID!): InventoryReorderRule
    listInventoryReorderRules(tenantId: String!, limit: Int): [InventoryReorderRule!]!
  }

  extend type Mutation {
    createInventoryReorderRule(tenantId: String!, code: String!, name: String!): InventoryReorderRule!
    deleteInventoryReorderRule(id: ID!): Boolean!
  }
`;

export const InventoryReorderRuleGqlResolvers = {
  Query: {
    getInventoryReorderRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryReorderRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
