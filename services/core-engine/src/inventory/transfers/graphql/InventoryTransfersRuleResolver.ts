export const InventoryTransfersRuleGqlTypeDefs = `
  type InventoryTransfersRule {
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
    getInventoryTransfersRule(id: ID!): InventoryTransfersRule
    listInventoryTransfersRules(tenantId: String!, limit: Int): [InventoryTransfersRule!]!
  }

  extend type Mutation {
    createInventoryTransfersRule(tenantId: String!, code: String!, name: String!): InventoryTransfersRule!
    deleteInventoryTransfersRule(id: ID!): Boolean!
  }
`;

export const InventoryTransfersRuleGqlResolvers = {
  Query: {
    getInventoryTransfersRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryTransfersRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
