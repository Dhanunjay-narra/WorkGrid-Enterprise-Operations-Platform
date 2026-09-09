export const InventoryStockSessionGqlTypeDefs = `
  type InventoryStockSession {
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
    getInventoryStockSession(id: ID!): InventoryStockSession
    listInventoryStockSessions(tenantId: String!, limit: Int): [InventoryStockSession!]!
  }

  extend type Mutation {
    createInventoryStockSession(tenantId: String!, code: String!, name: String!): InventoryStockSession!
    deleteInventoryStockSession(id: ID!): Boolean!
  }
`;

export const InventoryStockSessionGqlResolvers = {
  Query: {
    getInventoryStockSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryStockSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
