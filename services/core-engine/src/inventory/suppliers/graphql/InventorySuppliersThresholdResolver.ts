export const InventorySuppliersThresholdGqlTypeDefs = `
  type InventorySuppliersThreshold {
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
    getInventorySuppliersThreshold(id: ID!): InventorySuppliersThreshold
    listInventorySuppliersThresholds(tenantId: String!, limit: Int): [InventorySuppliersThreshold!]!
  }

  extend type Mutation {
    createInventorySuppliersThreshold(tenantId: String!, code: String!, name: String!): InventorySuppliersThreshold!
    deleteInventorySuppliersThreshold(id: ID!): Boolean!
  }
`;

export const InventorySuppliersThresholdGqlResolvers = {
  Query: {
    getInventorySuppliersThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
