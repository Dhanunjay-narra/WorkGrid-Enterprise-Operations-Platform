export const InventoryReorderSessionGqlTypeDefs = `
  type InventoryReorderSession {
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
    getInventoryReorderSession(id: ID!): InventoryReorderSession
    listInventoryReorderSessions(tenantId: String!, limit: Int): [InventoryReorderSession!]!
  }

  extend type Mutation {
    createInventoryReorderSession(tenantId: String!, code: String!, name: String!): InventoryReorderSession!
    deleteInventoryReorderSession(id: ID!): Boolean!
  }
`;

export const InventoryReorderSessionGqlResolvers = {
  Query: {
    getInventoryReorderSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryReorderSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
