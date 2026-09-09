export const InventoryReorderConfigGqlTypeDefs = `
  type InventoryReorderConfig {
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
    getInventoryReorderConfig(id: ID!): InventoryReorderConfig
    listInventoryReorderConfigs(tenantId: String!, limit: Int): [InventoryReorderConfig!]!
  }

  extend type Mutation {
    createInventoryReorderConfig(tenantId: String!, code: String!, name: String!): InventoryReorderConfig!
    deleteInventoryReorderConfig(id: ID!): Boolean!
  }
`;

export const InventoryReorderConfigGqlResolvers = {
  Query: {
    getInventoryReorderConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryReorderConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
