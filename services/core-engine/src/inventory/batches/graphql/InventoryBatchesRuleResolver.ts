export const InventoryBatchesRuleGqlTypeDefs = `
  type InventoryBatchesRule {
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
    getInventoryBatchesRule(id: ID!): InventoryBatchesRule
    listInventoryBatchesRules(tenantId: String!, limit: Int): [InventoryBatchesRule!]!
  }

  extend type Mutation {
    createInventoryBatchesRule(tenantId: String!, code: String!, name: String!): InventoryBatchesRule!
    deleteInventoryBatchesRule(id: ID!): Boolean!
  }
`;

export const InventoryBatchesRuleGqlResolvers = {
  Query: {
    getInventoryBatchesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
