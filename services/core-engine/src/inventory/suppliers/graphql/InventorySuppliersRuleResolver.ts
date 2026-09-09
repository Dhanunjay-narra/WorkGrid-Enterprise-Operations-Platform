export const InventorySuppliersRuleGqlTypeDefs = `
  type InventorySuppliersRule {
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
    getInventorySuppliersRule(id: ID!): InventorySuppliersRule
    listInventorySuppliersRules(tenantId: String!, limit: Int): [InventorySuppliersRule!]!
  }

  extend type Mutation {
    createInventorySuppliersRule(tenantId: String!, code: String!, name: String!): InventorySuppliersRule!
    deleteInventorySuppliersRule(id: ID!): Boolean!
  }
`;

export const InventorySuppliersRuleGqlResolvers = {
  Query: {
    getInventorySuppliersRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
