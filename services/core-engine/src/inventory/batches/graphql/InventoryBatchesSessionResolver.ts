export const InventoryBatchesSessionGqlTypeDefs = `
  type InventoryBatchesSession {
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
    getInventoryBatchesSession(id: ID!): InventoryBatchesSession
    listInventoryBatchesSessions(tenantId: String!, limit: Int): [InventoryBatchesSession!]!
  }

  extend type Mutation {
    createInventoryBatchesSession(tenantId: String!, code: String!, name: String!): InventoryBatchesSession!
    deleteInventoryBatchesSession(id: ID!): Boolean!
  }
`;

export const InventoryBatchesSessionGqlResolvers = {
  Query: {
    getInventoryBatchesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventoryBatchesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
